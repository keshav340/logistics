import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';
import { LoginResponse } from './dto/login-response.input';
import { LoginUserInput } from './dto/login-user.input';
import { ApprovedUser } from 'src/enums/approved.enums';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const sgMail = require('@sendgrid/mail')
import axios from 'axios';
import { ResetPasswordInput } from './resetpassword.input';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findUserByEmail(email);
    
    if (user ) {
      console.log(password);
      
      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        // Exclude password field from the result
       
        return user;
      }
    }

    return null;
  }

  async login(LoginUserInput: LoginUserInput): Promise<LoginResponse> {
    const user = await this.validateUser(LoginUserInput.email, LoginUserInput.password);
    

    if (!user) {
      throw new Error('User not found or not approved');
    }

    // Password validation is already done in validateUser, no need to do it again
    const access_token = this.jwtService.sign({
      email: user.email,
      id: user.id,
      userType: user.userType,
      customerSubType: user.customerSubType,
      vendorSubType: user.vendorSubType,
      overseasAgentSubType: user.overseasAgentSubType,
    });

    const loginResponse: LoginResponse = {
      access_token,
     
    };
    user.JWT_token = access_token;
    await this.userRepository.save(user);

    return loginResponse;
  }
  
  async logout(userid: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id: userid } });
    if(!user)
    {
      throw new Error('User Not Logged in');
    }
    user.JWT_token = null;
    await this.userRepository.save(user);
  }
  async generateresettoken(length: number): Promise<string> {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }
  async reset_password_token(email:string): Promise<void> {
    const user = await this.userRepository.findOne({ where: { email:email } });
    if (!user) {
      throw new Error('User not found');
    }
    if(user.isapproved!=ApprovedUser.Approved)
    {
      throw new Error("you are not approved");
    }
   //const  email1 = user.email;
   const reset_token = await this.generateresettoken(6);
   user.reset_token = reset_token;
   await this.userRepository.save(user);
   console.log("hi",user.reset_token)
   sgMail.setApiKey("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")
   const response = await sgMail.send({
    to: email,
    from: 'keshav.sharma@xpressword.com',
    subject: 'Reset Password',
    text: `Your OTP for Reset Password is: ${reset_token}`,
    html: `Your OTP for Reset Password is: ${reset_token}`,
  });

  


  }
  async resetPassword(email:string,resetPassword:string): Promise<void> {
    const user = await this.userRepository.findOne({ where: {email:email} });
    if(!user)
    {
      throw new Error("User not found");
    }
    if(user.reset_token!=resetPassword)
    {
      throw new Error("otp not valid");
    }
    user.reset_password_verification = new Date();


    // user.reset_password_Flag = true;
    // const desiredpassword = password.password
    // const desiredconfirmpassword = password.confirmPassword
    // if(desiredpassword != desiredconfirmpassword)
    // {
    //   throw new Error("Passwords do not match");
    // }
    
    // user.password = await bcrypt.hash(desiredpassword, 10);
    // user.reset_token = null;
    await this.userRepository.save(user);
    
  }
  async setNewPassword(email: string,password:ResetPasswordInput): Promise<void> {
    const user = await this.userRepository.findOne({ where: { email: email } });
    if (!user) {
      throw new Error("User not found");
    }
  
    const currentTime = new Date();
    // Check if the verification_date is within the last 5 minutes
    const verificationTime = user.reset_password_verification;
    const fiveMinutesAgo = new Date(currentTime.getTime() - 5 * 60 * 1000);
  
    if (!verificationTime || verificationTime < fiveMinutesAgo) {
      throw new Error("Verification expired");
    }
  
    const desiredPassword = password.password;
    const desiredConfirmPassword = password.confirmPassword;
  
    if (desiredPassword !== desiredConfirmPassword) {
      throw new Error("Passwords do not match");
    }
  
    user.password = await bcrypt.hash(desiredPassword, 10);
    user.reset_password_verification = null;
  
    await this.userRepository.save(user);
  }
  


}
