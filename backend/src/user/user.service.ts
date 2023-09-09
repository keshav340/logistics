// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CustomerInput, VendorInput, OverseasAgentInput } from './user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async registerCustomer(input: CustomerInput): Promise<User> {
    
    const customer = this.userRepository.create({
      ...input.commonData,
      userType: input.commonData.userType,
      subTypes: input.commonData.subTypes,
      // Add other fields specific to customers
      companyName: input.companyName,
    });
    return await this.userRepository.save(customer);
  }

  async registerVendor(input: VendorInput): Promise<User> {
    // Implement vendor registration logic here
    // Create a new vendor entity and save it to the database
    const vendor = this.userRepository.create({
      ...input.commonData,
      userType: input.commonData.userType,
      subTypes: input.commonData.subTypes,
      // Add other fields specific to vendors
      companyName: input.companyName,
    });
    return await this.userRepository.save(vendor);
  }

  async registerAgent(input: OverseasAgentInput): Promise<User> {
    
    const agent = this.userRepository.create({
      ...input.commonData,
      userType: input.commonData.userType,
      subTypes: input.commonData.subTypes,
      // Add other fields specific to agents
      companyName: input.companyName,
    });
    return await this.userRepository.save(agent);
  }
}

