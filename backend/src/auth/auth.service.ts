import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';
import { LoginResponse } from './dto/login-response.input';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findUserByEmail(email);

    if (user && user.isapproved === true) {
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

    return loginResponse;
  }
}
