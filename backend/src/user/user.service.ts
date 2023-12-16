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
import { Updateapproved } from './inputdto/approved.input';
import { ApprovedUser } from 'src/enums/approved.enums';
import { SendFormTorejectedUser } from './inputdto/rejected.input';
import { Adminreject } from './inputdto/adminreject.input';
import { Admin } from './inputdto/admin.input';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
const crypto = require('crypto');
import { CompanyContactDto } from './inputdto/company-contact.input';
import { CorporateAddressDto } from './inputdto/corporate-adress.input';
import { CompanyContact } from './company.entity';
import { CorporateAddress } from './corporate.entity';
import { Kyc } from './kyc.entity';
import { KycInput } from './inputdto/kyc.input';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
@Injectable()
export class UserService {
  private readonly inMemoryCache: Record<string, any> = {};
  

  constructor(
    private readonly configService: ConfigService,
   
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(CompanyContact)
    private readonly companyContactRepository: Repository<CompanyContact>,
    @InjectRepository(CorporateAddress)
    private readonly corporateAdressRepository: Repository<CorporateAddress>,
    @InjectRepository(Kyc)
    private readonly kycRepository: Repository<Kyc>,
    
    
  ) {
}
  async verifyEmailotp(email:string):Promise<void>{
    const user = await this.userRepository.findOne({ where: { email } });
    if(!user){
      throw new Error('User not found');
    }
    const token = await this.generateOTP(4);
    sgMail.setApiKey("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")
    user.email_token = token;
    const response = await sgMail.send({
      to: email,
      from: 'keshav.sharma@xpressword.com',
      subject: 'OTP verification',
      text: `Your OTP for verifiying email is: ${token}`,
      html: `Your OTP for verifying email is: ${token}`,
    })
    await this.userRepository.save(user);



  }
  async verify_email(token:string,userid:number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id:userid} });
    if(!user)
    {
      throw new Error("User Not Found")
    }
    if(user.email_token!=token)
    {
      throw new Error("Otp is not correct")
    }
    user.email_verify = true;
    await this.userRepository.save(user);
  }

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
      } 
      else{

        // Create a new user
        const newUser = new User();
        newUser.email = email;
        newUser.otp = generateOTP;
        newUser.otp_veified = false;
        await this.userRepository.save(newUser);
      }

       
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
      throw new Error('User not found'); 
    }
    if (user.userType) {
      throw new Error('User type is already set.');
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

  async listreveiwedusers(): Promise<User[]> {
   
    return await this.userRepository.find({
      where: { isapproved:ApprovedUser.REVEIW_PENDING },
    });
  }
  async adminRegister(input:Admin): Promise<User>
  {
    const existingUser = await this.userRepository.findOne({ where: { email: input.email } });

  if (existingUser) {
    throw new Error("User already exists");
  }
   
    
    const admin = new User();
    admin.userType = UserType.Admin
    admin.isapproved = ApprovedUser.Approved;
    admin.first_name = input.first_name;
    admin.last_name = input.last_name;
    admin.Designation = input.Designation;
    admin.mobile = input.mobile
    admin.website = input.website;
    admin.email = input.email;
    const password = input.password;
    const confirmPass = input.confirmpassword
    if(password !== confirmPass)
    {
      throw new Error("Paswords do not match")
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    admin.password = hashedPassword;
    await this.userRepository.save(admin);
    return admin;
  }

  async finalreg(input:Finalreg,userId:number,userinput:UpdateUsertype,compcontact:CompanyContactDto,corpad:CorporateAddressDto,kycInput: KycInput):Promise<User>{
    try{
      const user = await this.userRepository.findOne({where:{id:userId}});
      if (!user || !user.otp_veified) {
        throw new Error('User not found or OTP not verified');
      }
      const email = user.email;
      sgMail.setApiKey("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")
      const body = "You have been registered with us.We are verifying your data.We will mail you once the process completes."
      user.userType = userinput.userType;
      user.BillingCode = this.generateBillingCode();
      user.companyName = input.companyName

      user.companyType = input.companyType;
      user.industryType = input.industryType;
      user.state = input.state;
      user.city = input.city;
      user.country = input.country;
      user.pincode = input.pincode;
      user.Adress = input.Address;
      user.company_reg_no = input.company_reg_no;
      user.company_pan_no = input.company_pan_no;
      user.annualTurnover = input.annualTurnover;
      user.gst_no = input.gst_no;
      user.first_name = input.first_name;
      user.last_name = input.last_name;
      user.Designation = input.Designation;
      user.mobile = input.mobile;
      user.website = input.website;
      user.isapproved =ApprovedUser.Approval_pending;
      user.finalregapproved = true;
      const newCompanyContact = new CompanyContact();
      newCompanyContact.firstName = compcontact.firstName;
      newCompanyContact.lastName = compcontact.lastName;
      newCompanyContact.designation = compcontact.designation;
      newCompanyContact.emailId = compcontact.emailId;
      newCompanyContact.mobileNo = compcontact.mobileNo;
      const savedCompanyContact = await this.companyContactRepository.save(newCompanyContact);
       user.companyContact = savedCompanyContact
      const corpadress = new CorporateAddress();
      corpadress.address =  corpad.address
      corpadress.city = corpad.city
      corpadress.country = corpad.country
      corpadress.state = corpad.state
      corpadress.pincode = corpad.pincode
      const savedcorp = await this.corporateAdressRepository.save(corpadress);
      user.corporateAddress = savedcorp;
      const kyc = this.kycRepository.create(kycInput);
      user.kyc = kyc;
      await this.userRepository.save(user);
       const response = await sgMail.send({
        to: email,
        from: 'keshav.sharma@xpressword.com',
        subject: 'OTP verification',
         text:  body,
        //html: body,
       });


      return user;
    
    }
    catch(error){
      throw new Error(error);
    }
    
  }
  async sendtoreveiweduser(userId:number): Promise<User> {
    const user = await this.userRepository.findOne({where:{id:userId}})
    user.isapproved = ApprovedUser.REVEIW_PENDING
    await this.userRepository.save(user);
    return user;
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
    console.log(password);
    if (password != confirmPassword) {
      throw new Error('Password does not match');
    }
    if (user.otp_veified == true) {
      
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
     
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
      where: { isapproved:ApprovedUser.Approved }, // Filter by OTP verification status
    });
  }
  async listrejectedusers(): Promise<User[]> {
    // Use the TypeORM repository to fetch the initial registration records
    return await this.userRepository.find({
      where: { isapproved:ApprovedUser.Rejected }, // Filter by OTP verification status
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

  async filterlistNonApprovedUsersbyUserType(userType: UserType,customerSubType:CustomerSubType,vendorSubType:VendorSubType,overseasAgentSubType:OverseasAgentSubType): Promise<User[]> {
    return this.userRepository.find({
      where: {
        isapproved: ApprovedUser.Approval_pending,
        userType,
        customerSubType,
        vendorSubType,
        overseasAgentSubType,

        
      },
    });


    
  }
  async approvereveiwedUser(userId: number,input:Updateapproved,compcontact:CompanyContactDto,corpad:CorporateAddressDto,kycInput: KycInput): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ where: { id: userId,isapproved: ApprovedUser.REVEIW_PENDING} });
      if (!user) {
        throw new Error('User not found');
      }
      user.userType = input.userType;
      user.customerSubType = input.customerSubType;
      user.vendorSubType = input.vendorSubType;
      user.overseasAgentSubType = input.overseasAgentSubType;
      user.email = input.email;
      user.Adress = input.Address
      user.companyName = input.company_name
      user.company_pan_no = input.company_pan_no
      user.company_reg_no = input.company_reg_no
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
      user.remarks = input.remarks;

      let flag = 0;
      user.isapproved = input.Approveduser;
      const newCompanyContact = new CompanyContact();
      newCompanyContact.firstName = compcontact.firstName;
      newCompanyContact.lastName = compcontact.lastName;
      newCompanyContact.designation = compcontact.designation;
      newCompanyContact.emailId = compcontact.emailId;
      newCompanyContact.mobileNo = compcontact.mobileNo;
      const savedCompanyContact = await this.companyContactRepository.save(newCompanyContact);
       user.companyContact = savedCompanyContact
      const corpadress = new CorporateAddress();
      corpadress.address =  corpad.address
      corpadress.city = corpad.city
      corpadress.country = corpad.country
      corpadress.state = corpad.state
      corpadress.pincode = corpad.pincode
      const savedcorp = await this.corporateAdressRepository.save(corpadress);
      user.corporateAddress = savedcorp;
      const kyc = this.kycRepository.create(kycInput);
      user.kyc = kyc;


      await this.userRepository.save(user);

      return user;
    } catch (error) {
      throw new Error('Failed to approve user: ' + error.message);
    }

    
  }
  

// async rejectUser(userId: number): Promise<User> {
//   try {
//     const user = await this.userRepository.findOne({
//       where: { id: userId, isapproved: ApprovedUser.Approval_pending },
//     });

//     if (!user) {
//       throw new Error('User not found or already approved/rejected');
//     }
    

    
//     user.isapproved = ApprovedUser.Rejected_users;

//     await this.userRepository.save(user);

//     return user;
//   } catch (error) {
//     throw new Error('Failed to reject user: ' + error.message);
//   }
// }
  
  
  async approveUser(userId: number,input:Updateapproved,compcontact:CompanyContactDto,corpad:CorporateAddressDto,kycInput: KycInput): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ where: { id: userId,isapproved: ApprovedUser.Approval_pending} });
      if (!user) {
        throw new Error('User not found');
      }
      user.userType = input.userType;
      user.customerSubType = input.customerSubType;
      user.vendorSubType = input.vendorSubType;
      user.overseasAgentSubType = input.overseasAgentSubType;
      user.email = input.email;
      user.Adress = input.Address
      user.companyName = input.company_name
      user.company_pan_no = input.company_pan_no
      user.company_reg_no = input.company_reg_no
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
      user.remarks = input.remarks
      let flag = 0;
      user.isapproved = input.Approveduser;
      const newCompanyContact = new CompanyContact();
      newCompanyContact.firstName = compcontact.firstName;
      newCompanyContact.lastName = compcontact.lastName;
      newCompanyContact.designation = compcontact.designation;
      newCompanyContact.emailId = compcontact.emailId;
      newCompanyContact.mobileNo = compcontact.mobileNo;
      const savedCompanyContact = await this.companyContactRepository.save(newCompanyContact);
       user.companyContact = savedCompanyContact
      const corpadress = new CorporateAddress();
      corpadress.address =  corpad.address
      corpadress.city = corpad.city
      corpadress.country = corpad.country
      corpadress.state = corpad.state
      corpadress.pincode = corpad.pincode
      const savedcorp = await this.corporateAdressRepository.save(corpadress);
      user.corporateAddress = savedcorp;
      const kyc = this.kycRepository.create(kycInput);
      user.kyc = kyc;



      await this.userRepository.save(user);

      return user;
    } catch (error) {
      throw new Error('Failed to approve user: ' + error.message);
    }

    
  }

  generateBillingCode(): string {
   
    const prefix = 'BILL';
    const randomNumber = Math.floor(Math.random() * 10000); 
    const billingCode = `${prefix}-${randomNumber}`;
    return billingCode;
  }
  async adminreject(userId: number, input: Adminreject): Promise<User> {
    try {
      // Fetch the user by ID and perform the admin rejection logic here
      const user = await this.userRepository.findOne({ where: { id: userId, isapproved: ApprovedUser.Approval_pending } });
      if (!user) {
        throw new Error('User not found');
      }

      // Update the user's status and remarks
      user.isapproved = ApprovedUser.Rejected
      user.remarks = input.remarks;

      // Save the updated user
      await this.userRepository.save(user);

      return user;
    } catch (error) {
      throw new Error('Failed to admin reject user: ' + error.message);
    }
  }
  async adminreveiwreject(userId: number, input: Adminreject): Promise<User> {
    try {
      // Fetch the user by ID and perform the admin rejection logic here
      const user = await this.userRepository.findOne({ where: { id: userId, isapproved: ApprovedUser.REVEIW_PENDING} });
      if (!user) {
        throw new Error('User not found');
      }

      // Update the user's status and remarks
      user.isapproved = ApprovedUser.Rejected
      user.remarks = input.remarks;

      // Save the updated user
      await this.userRepository.save(user);

      return user;
    } catch (error) {
      throw new Error('Failed to admin reject user: ' + error.message);
    }
  }
  async sendFormtorejectUser(userId: number,input:SendFormTorejectedUser,compcontact:CompanyContactDto,corpad:CorporateAddressDto,kycInput: KycInput): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ where: { id: userId,isapproved: ApprovedUser.Rejected} });
      if (!user) {
        throw new Error('User not found');
      }
      user.userType = input.userType;
      user.customerSubType = input.customerSubType;
      user.vendorSubType = input.vendorSubType;
      user.overseasAgentSubType = input.overseasAgentSubType;
      user.email = input.email;
      user.Adress = input.Address
      user.companyName = input.company_name
      user.company_pan_no = input.company_pan_no
      user.company_reg_no = input.company_reg_no
      // const password = input.password;
      // const hashedPassword = await bcrypt.hash(password, 10);
      //user.password = hashedPassword;
      //user.BillingCode = this.generateBillingCode();
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
      const newCompanyContact = new CompanyContact();
      newCompanyContact.firstName = compcontact.firstName;
      newCompanyContact.lastName = compcontact.lastName;
      newCompanyContact.designation = compcontact.designation;
      newCompanyContact.emailId = compcontact.emailId;
      newCompanyContact.mobileNo = compcontact.mobileNo;
      const savedCompanyContact = await this.companyContactRepository.save(newCompanyContact);
       user.companyContact = savedCompanyContact
      const corpadress = new CorporateAddress();
      corpadress.address =  corpad.address
      corpadress.city = corpad.city
      corpadress.country = corpad.country
      corpadress.state = corpad.state
      corpadress.pincode = corpad.pincode
      const savedcorp = await this.corporateAdressRepository.save(corpadress);
      user.corporateAddress = savedcorp;
      const kyc = this.kycRepository.create(kycInput);
      user.kyc = kyc;


      
      let flag = 0;

      await this.userRepository.save(user);

      return user;
    } catch (error) {
      throw new Error('Failed to correct the data ' + error.message);
    }
   
    

    
  }
  async getUserById(userId: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async getFinalRegisteredUserById(userId: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: userId,isapproved:ApprovedUser.Approval_pending } });
    if (!user) {
      throw new Error('Final registered user not found');
    }
    return user;
  }
  async userReveiw( userId: number): Promise<string> {
    try {
      // Fetch the user from the service or repository
      const user = await this.userRepository.findOne({ where: { id: userId}});

      // Define the payload for the JWT token
      const payload = {
        userID: user.id,
        // userType: user.userType,
        // customerSubType: user.customerSubType,
        // vendorSubType: user.vendorSubType,
        // overseasAgentSubType: user.overseasAgentSubType,
        // email: user.email,
        // companyType: user.companyType,
        // industryType: user.industryType,
        // companyName: user.companyName,
        // state: user.state,
        // city: user.city,
        // pincode: user.pincode,
        // address: user.Adress,
        // country: user.country,
        // companyRegNo: user.company_reg_no,
        // companyPanNo: user.company_pan_no,
        // firstName: user.first_name,
        // lastName: user.last_name,
        // designation: user.Designation,
        // mobileNo: user.mobile,
        // website: user.website,
        // gstNo: user.gst_no,
        // annualTurnover: user.annualTurnover,
        // CorporateAddress: user.corporateAddress,
        // CompanyContact:user.companyContact,
        // Kyc_Details:user.kyc

      };

     
      const secretKey = "secret1"
      
      
      const token = jwt.sign(payload, secretKey);
      const sha256 = crypto.createHash('sha256');
      sha256.update(token);
      const hashedToken = sha256.digest('hex');
      console.log(hashedToken);
      console.log("User Data in the Token:");
      const decodedToken = jwt.verify(token, secretKey);
      console.log(decodedToken);
      const env = this.configService.get<string>('NODE_ENV')
      const reviewLink =
        env == 'production'
          ? `https://app.glob/xtrade.co.in/vendor-review-form/${hashedToken}`
          : `http://localhost:3002/vendor-review-form/${hashedToken}`;
          console.log('DATABASE_HOST:',env);
          //console.log('DATABASE_PORT:', process.env.DATABASE_PORT);
   

      const tokenLink = `www.example.com/${hashedToken}`;
      const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>User Review</title>
      </head>
      <body>
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
              <div style="background: #333; color: #ffffff; text-align: center; padding: 10px;">
                  <h2>User Review</h2>
              </div>
              <div style="padding: 20px;">
                  <p>Hello,</p>
                  <p> Please click the button below to review your user profile:</p>
                  <a href="${reviewLink}" style="display: inline-block; background: #007bff; color: #ffffff; text-align: center; text-decoration: none; padding: 10px 20px; margin: 20px 0; border-radius: 5px;">Access User Review</a>
                  <p>If you have any questions, please don't hesitate to contact us.</p>
                  <p>Thank you!</p>
              </div>
              <div style="background: #333; color: #ffffff; text-align: center; padding: 10px;">
                  <p>&copy; ${new Date().getFullYear} Exacoadel</p>
              </div>
          </div>
      </body>
      </html>
    `;
      const email = user.email
      //console.log(tokenLink);
      sgMail.setApiKey("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")
      const response = await sgMail.send({
        to: email,
        from: 'keshav.sharma@xpressword.com',
        subject: 'user Reveiw',
        html: html,
      });
      user.reveiw_token = hashedToken;
      await this.userRepository.save(user);
      return hashedToken;
    } catch (error) {
      throw new Error('Failed to generate user review token: ' + error.message);
    }
  }
  async  decodeHashedToken(hashedToken: string): Promise<any> {
    try {
     const secret_key = "secret1"
      const decodedToken = jwt.verify(hashedToken,secret_key);
  
      return decodedToken;
    } catch (error) {
      console.error('Error decoding hashed token:', error);
      return null; // Return null in case of an error or invalid token
    }
  }
}