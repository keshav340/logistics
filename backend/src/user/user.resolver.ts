// src/user/user.resolver.ts

import { Resolver, Mutation, Args, Int,Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Password } from './inputdto/password.input';
import { SelectUserTypeAndSubtypeInput } from './inputdto/selectusertypesubtype.input';
import { EmailInput } from './inputdto/email.input';
import { User } from './user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async acceptEmail(
    @Args('emailInput') emailInput: EmailInput,
  ): Promise<User> {
    return this.userService.acceptEmail(emailInput);
  }

  @Mutation(() => String) // Change the return type to String
async sendOTP(
  @Args('email') email: string,
): Promise<string> { // Change the return type to Promise<string>
  await this.userService.sendotp(email); // Call the service method to send OTP
  return 'OTP sent successfully'; // Return a success message
}


  @Mutation(() => User)
  async initialRegistration(
    @Args('userInput') userInput: SelectUserTypeAndSubtypeInput,
    @Args('emailInput') emailInput: EmailInput,
  ): Promise<User> {
    return this.userService.initialregisteration(userInput, emailInput);
  }

  @Mutation(() => User)
  async savePassword(
    @Args('passwordInput') passwordInput: Password,
    @Args('userId') userId: number,
  ): Promise<User> {
    return this.userService.savePassword(passwordInput, userId);
  }

  @Query(() => [User]) // Define a query to list initial registrations
  async listInitialRegistrations(): Promise<User[]> {
    return this.userService.listInitialRegistrations(); // Implement this method in UserService
  }

  @Query(() => [String])
  async listAllOtps(): Promise<string[]> {
    return this.userService.listAllOtps();
  }
  @Query(() => String, { nullable: true }) // Allow null as a valid response
  async getOtpByEmail(@Args('email') email: string): Promise<string | null> {
    const otp = await this.userService.getOtpByEmail(email);
    return otp;
  }
  

  
  
}
