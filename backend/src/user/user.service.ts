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
          from_name: "Developer",
          from_email: "keshav.sharma@xpressword.com",
          subject: "OTP verification",
          text: `Your OTP for verification is: ${generateOTP}`
        }
      });
      await this.cacheManager.set(`email_${email}`, generateOTP, 3000);
      
      
    } catch (error) {
      throw new Error(`Mailchimp send OTP error: ${error.message}`);
    }
  }

  async initialregisteration(input: SelectUserTypeAndSubtypeInput, emailinput: EmailInput): Promise<User> {
    const user = new User();
    user.userType = input.userType;
    user.email = emailinput.email;
  
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
  
    const usergivenotp = emailinput.otp;
    const given_email = emailinput.email;
    const storedOTP = await this.cacheManager.get(`email_${given_email}`);
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

  // Helper functions for in-memory cache
 

 
 
  
}
