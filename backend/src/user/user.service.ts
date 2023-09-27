import { Injectable,Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { EmailInput } from './inputdto/email.input';
import { UserType } from 'src/enums/user.enums';
import { EmailService } from 'src/email/email.service';
import { SelectUserTypeAndSubtypeInput } from './inputdto/selectusertypesubtype.input';
import { Password } from './inputdto/password.input';
const sgMail = require('@sendgrid/mail')
import axios from 'axios';
import * as bcrypt from 'bcrypt';
import { OtpService } from './otp.service';
import { Finalreg } from './inputdto/finalreg.input';
import { UpdateUsertype } from './inputdto/updateusertype.input';
import { CustomerSubType, OverseasAgentSubType, VendorSubType } from 'src/enums/user.enums';
import { UpdateapprovedUsertype } from './inputdto/updateapproveduser.input';
import { Updateemailpasswordapproved } from './inputdto/updateapproveuseremailpassword.input';
@Injectable()
export class UserService {
  private readonly inMemoryCache: Record<string, any> = {};
  

  constructor(
   
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    
  ) {}
  

  async acceptEmail(input: EmailInput): Promise<User> {
    const user = new User();
    user.email = input.email;
    return await this.userRepository.save(user);
  }
  async sendotp(email: string): Promise<void> {
    console.log(email, typeof email);
    const generateOTP = await this.generateOTP(4);
    sgMail.setApiKey("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")
    
    try {
      // Check if a user with the provided email exists
      const existingUser = await this.userRepository.findOne({ where: { email } });
  
      if (existingUser) {
        // Update the existing user's OTP
        existingUser.otp = generateOTP;
        existingUser.otp_veified = false;
        await this.userRepository.save(existingUser);
      } else {
        // Create a new user
        const newUser = new User();
        newUser.email = email;
        newUser.otp = generateOTP;
        newUser.otp_veified = false;
        await this.userRepository.save(newUser);
      }
  
      // Send the OTP email
      const response = await sgMail.send({
        to: email,
        from: 'keshav.sharma@xpressword.com',
        subject: 'OTP verification',
        text: `Your OTP for verification is: ${generateOTP}`,
        html: `Your OTP for verification is: ${generateOTP}`,
      });
  
    } catch (error) {
      console.log(typeof email);
      console.log(error);
    }
  }
  
  async initialregisteration(input: SelectUserTypeAndSubtypeInput, emailinput: EmailInput): Promise<User> {
    const given = emailinput.email;
    const user = await this.userRepository.findOne({ where: { email: given } });
    if (!user) {
      throw new Error('User not found'); // You can customize this error message
    }
    user.userType = input.userType;
    const usergivenotp = emailinput.otp;
    if (!user || user.otp !== emailinput.otp) {
      throw new Error('Invalid OTP. Please verify OTP correctly.');
    }
  
    switch (input.userType) {
      case UserType.CUSTOMER:
        user.customerSubType = input.customerSubType;
        break;
      case UserType.VENDOR:
        user.vendorSubType = input.vendorSubType;
        break;
      case UserType.OVERSEAS_AGENT:
        user.overseasAgentSubType = input.overseasAgentSubType;
        break;
      default:
        throw new Error('Invalid user type');
    }
  
    user.otp_veified = true;
    await this.userRepository.save(user);
  
    return user;
  }

  async finalreg(input:Finalreg,userId:number,userinput:UpdateUsertype):Promise<User>{
    try{
      const user = await this.userRepository.findOne({where:{id:userId}});
      if (!user || !user.otp_veified) {
        throw new Error('User not found or OTP not verified');
      }
      user.userType = userinput.userType;

      user.companyType = input.companyType;
      user.industryType = input.industryType;
      user.state = input.state;
      user.city = input.city;
      user.country = input.country;
      user.company_reg_no = input.company_reg_no;
      user.annualTurnover = input.annualTurnover;
      user.gst_no = input.gst_no;
      user.first_name = input.first_name;
      user.last_name = input.last_name;
      user.Designation = input.Designation;
      user.mobile = input.mobile;
      user.website = input.website;
      user.isapproved = false;
      user.finalregapproved = true;
      await this.userRepository.save(user);
      return user;
    
    }
    catch(error){
      throw new Error(error);
    }
    
  }
 async fetchdata(gstinp:string)
 {
  
  try {
   const  apiurl = `https://gst-return-status.p.rapidapi.com/free/gstin/${gstinp}`;
    const headers = {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '5304f85846mshf2582d3224f9f7fp1f76cdjsn855053fb983a',
      'X-RapidAPI-Host': 'gst-return-status.p.rapidapi.com'
    }
    const response = await axios.get(apiurl, { headers });
    return response.data; 
  } catch (error) {
    throw new Error('Failed to fetch GST data');
  }

 }


  
  

  
  async savePassword(input: Password, userId: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const password = input.password;
    const confirmPassword = input.confirmPassword;
    if (password != confirmPassword) {
      throw new Error('Password does not match');
    }
    if (user.otp_veified == true) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    } else {
      throw new Error('OTP is not verified');
    }
    return await this.userRepository.save(user);
  }

  async generateOTP(length: number): Promise<string> {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

  async listInitialRegistrations(): Promise<User[]> {
    // Use the TypeORM repository to fetch the initial registration records
    return await this.userRepository.find({
      where: { otp_veified: true }, // Filter by OTP verification status
    });
  }
  async listapprovedusers(): Promise<User[]> {
    // Use the TypeORM repository to fetch the initial registration records
    return await this.userRepository.find({
      where: { isapproved:false }, // Filter by OTP verification status
    });
  }
  async listAllOtps(): Promise<string[]> {
    // Fetch all OTPs from the database
    const users = await this.userRepository.find();
    const otps = users.map((user) => user.otp).filter((otp) => otp !== null);

    return otps;
  }
  async getOtpByEmail(email: string): Promise<string | null> {
    // Find the user by email
    const user = await this.userRepository.findOne({ where: { email } });

    // If the user exists and has an OTP, return the OTP
    if (user && user.otp) {
      return user.otp;
    }

  
    return null;
  }
  async findUserByEmail(email: string): Promise<User> {
    let user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async filterlistNonApprovedUsersbyUserType(userType: UserType): Promise<User[]> {
    return this.userRepository.find({
      where: {
        isapproved: false,
        userType,
       

        
      },
    });


    
  }
  async approveUser(userId: number,input:UpdateapprovedUsertype,input1:SelectUserTypeAndSubtypeInput,input2:Updateemailpasswordapproved): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ where: { id: userId,isapproved: false} });
      if (!user) {
        throw new Error('User not found');
      }
      user.userType = input1.userType;
      user.customerSubType = input1.customerSubType;
      user.vendorSubType = input1.vendorSubType;
      user.overseasAgentSubType = input1.overseasAgentSubType;
      user.email = input2.email;
      const password = input2.password;
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;


      user.annualTurnover = input.annualTurnover;
      user.companyType = input.companyType;
      user.industryType = input.industryType;
      user.state = input.state;
      user.city = input.city;
      user.country = input.country;
      user.company_reg_no = input.company_reg_no;
      user.annualTurnover = input.annualTurnover;
      user.gst_no = input.gst_no;
      user.first_name = input.first_name;
      user.last_name = input.last_name;
      user.Designation = input.Designation;
      user.mobile = input.mobile;
      user.website = input.website;

      user.isapproved = true;
      await this.userRepository.save(user);

      return user;
    } catch (error) {
      throw new Error('Failed to approve user: ' + error.message);
    }
  }


 

 
 
  
}