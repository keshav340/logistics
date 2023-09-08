// user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: User): Promise<User> {
    const { userType, ...userData } = user;

    // Based on the userType, customize the user creation logic
    let newUser: User;

    switch (userType) {
      case userType.ADMIN:
        // Create an admin user
        newUser = this.userRepository.create({
          userType,
          ...userData,
          // Add admin-specific fields here
        });
        break;
      case userType.VENDOR:
        /
        newUser = this.userRepository.create({
          userType,
          ...userData,
          // Add vendor-specific fields here
        });
        break;
      case userType.CUSTOMER:
        
        newUser = this.userRepository.create({
          userType,
          ...userData,
          // Add customer-specific fields here
        });
        break;
      default:
        throw new Error(`Unsupported userType: ${userType}`);
    }

    return this.userRepository.save(newUser);
  }

  
}
