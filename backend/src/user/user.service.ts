import { Injectable,Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { EmailInput } from './inputdto/email.input';
import { UserType } from 'src/enums/user.enums';
import { EmailService } from 'src/email/email.service';
import { SelectUserTypeAndSubtypeInput } from './inputdto/selectusertypesubtype.input';
import { Password } from './inputdto/password.input';
const mailchimpClient = require("@mailchimp/mailchimp_transactional")("md-XQIQjSZT1BiLRjhCCM_kxQ");
import * as bcrypt from 'bcrypt';
import { OtpService } from './otp.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager/dist';
import { Cache } from 'cache-manager';

@Injectable()
export class UserService {
  private readonly inMemoryCache: Record<string, any> = {};
  

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    
  ) {}
  

  async acceptEmail(input: EmailInput): Promise<User> {
    const user = new User();
    user.email = input.email;
    return await this.userRepository.save(user);
  }

  async sendotp(email: string): Promise<void> {
    const generateOTP = await this.generateOTP(4);

    try {
      const response = await mailchimpClient.messages.send({
        message: {
          to: [{ email }],
          from_name: 'Developer',
          from_email: 'keshav.sharma@xpressword.com',
          subject: 'OTP verification',
          text: `Your OTP for verification is: ${generateOTP}`,
        },
      });
      const newUser = new User();
     newUser.email = email;
     newUser.otp = generateOTP;
     newUser.otp_veified = false;
     await this.userRepository.save(newUser);

      
    } catch (error) {
      throw new Error(`Mailchimp send OTP error: ${error.message}`);
    }
  }

  async initialregisteration(input: SelectUserTypeAndSubtypeInput, emailinput: EmailInput): Promise<User> {
    const given = emailinput.email;
    const user = await this.userRepository.findOne({ where:{email: given }});
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
  
    
    
    // if (!storedOTP || storedOTP !== usergivenotp) {
    //   console.log(storedOTP);
    //   throw new Error('Invalid OTP. Please verify OTP correctly.');
    // }
    user.otp_veified = true;
    await this.userRepository.save(user);
    
;
    return user;
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

    // Return null if the user or OTP doesn't exist
    return null;
  }

  // Helper functions for in-memory cache
 

 
 
  
}
