import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CommonUserInput } from './user-input.dto';
import { CustomerInput } from './customer-input.dto';
import { VendorInput } from './vendor-input.dto';
import { OverseasAgentInput } from './overseas-agent.input.dto';
import { UserType } from 'src/enums/user.enums';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  

  async registerCustomer(input: CommonUserInput): Promise<User> {
    const customer = this.userRepository.create({
      userType: UserType.CUSTOMER,
     // subTypes: input.customerData?.subTypes,
      companyType: input.companyType,
      industryType: input.industryType,
      CompanyName: input.CompanyName,
      Address: input.Address,
      State: input.State,
      City: input.City,
      Country: input.Country,
      Company_Registration_Number: input.customerData?.company_registration_no,
      company_pan_no: input.customerData?.company_pan_no,
      GST_no: input.customerData?.gst_no,
      annualTurnover: input.annualTurnover,
      FirstName: input.FirstName,
      LastName: input.LastName,
      Designation: input.Designation,
      Mobile_no: input.Mobile_no,
      Email_id: input.Email_id,
      Website_Adress: input.Website_Adress,
     
    });
    return await this.userRepository.save(customer);
  }

  async registerVendor(input: CommonUserInput): Promise<User> {
    const vendor = this.userRepository.create({
    
      userType: UserType.VENDOR,
      //subTypes: input.vendorData.subTypes,
      companyType: input.companyType,
      industryType: input.industryType,
      CompanyName: input.CompanyName,
      Address: input.Address,
      State: input.State,
      City: input.City,
      Country: input.Country,
      Company_Registration_Number: input.vendorData?.company_registration_no,
      company_pan_no: input.vendorData?.company_pan_no,
      GST_no: input.vendorData?.gst_no,
      annualTurnover: input.annualTurnover,
      FirstName: input.FirstName,
      LastName: input.LastName,
      Designation: input.Designation,
      Mobile_no: input.Mobile_no,
      Email_id: input.Email_id,
      Website_Adress: input.Website_Adress,
     
    });
    return await this.userRepository.save(vendor);
  }

  async registerAgent(input: CommonUserInput): Promise<User> {
    const agent = this.userRepository.create({
      //billingCodeofCompany: input.billingCodeofCompany,
      userType: UserType.OVERSEAS_AGENT,
      //subTypes: input.customerData?.subTypes,
      companyType: input.companyType,
      industryType: input.industryType,
      CompanyName: input.CompanyName,
      Address: input.Address,
      State: input.State,
      City: input.City,
      Country: input.Country,
    
      annualTurnover: input.annualTurnover,
      FirstName: input.FirstName,
      LastName: input.LastName,
      Designation: input.Designation,
      Mobile_no: input.Mobile_no,
      Email_id: input.Email_id,
      Website_Adress: input.Website_Adress,
      //majorTradeLines: input.agentData?.majorTradeLines,
      Business_License_no: input.agentData?.Business_License_no,
      Company_tax_id_no: input.agentData?.Company_tax_id_no,
      zip_code: input.agentData?.zip_code,
    });
    return await this.userRepository.save(agent);
  }
}
