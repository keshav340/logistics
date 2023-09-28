// src/user/user.resolver.ts

import { Resolver, Mutation, Args, Int,Query,Context,} from '@nestjs/graphql';
import { UserService } from './user.service';
import { Password } from './inputdto/password.input';
import { SelectUserTypeAndSubtypeInput } from './inputdto/selectusertypesubtype.input';
import { EmailInput } from './inputdto/email.input';
import { User } from './user.entity';
import { UseGuards, HttpException, HttpStatus, } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Finalreg } from './inputdto/finalreg.input';
import { UpdateUsertype } from './inputdto/updateusertype.input';
import { UserType } from 'src/enums/user.enums';
import { CustomerSubType, OverseasAgentSubType, VendorSubType } from 'src/enums/user.enums';
import { UpdateapprovedUsertype } from './inputdto/updateapproveduser.input';
import { Updateemailpasswordapproved } from './inputdto/updateapproveuseremailpassword.input';
import { Updateapproved } from './inputdto/approved.input'; 
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
  @Query(() => [User]) 
  async waitingforapproval(): Promise<User[]> {
    return this.userService.listapprovedusers();
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
  // @Query(returns => String)
  // @UseGuards(AuthGuard)
  // login(
  //   @Args({name:"email",type:String}) email: string,
  //   @Args({name:"password",type:String}) password: string,
  // ): string {
  //   return "User Authenticated Sucessfully";
  // }
  @Mutation(() => String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<string> {
    const user = await this.userService.findUserByEmail(email);
   // const hashedPassword = await bcrypt.hash(password, 10);


    if (user && user.isapproved==true && (await bcrypt.compare(password, user.password))) {
      
      const ctx = { user };
      let payload ={
        email: user.email,
        id: user.id,
        userType: user.userType,
        customerSubType: user.customerSubType,

      };
      return jwt.sign(payload, 'secret', { expiresIn: '1h' });
    } else {
      throw new HttpException('Unauthenticated', HttpStatus.UNAUTHORIZED);
    }
  }
  
  
  @Mutation(() => User)
  async finalreg(
    @Args('input') input: Finalreg, // Correct the casing here
    @Args('userId') userId: number,
    @Args('userInput') userInput: UpdateUsertype, // Correct the casing here
  ): Promise<User> {
    return this.userService.finalreg(input, userId, userInput);
  }

  @Query(() => [User])
  async listNonApprovedUsers(
    @Args('userType') userType: UserType,
    @Args('CustomerSubType',{nullable:true}) CustomerSubType: CustomerSubType,
    @Args('VendorSubType',{nullable:true}) VendorSubType: VendorSubType,
    @Args('OverseasAgentSubType',{nullable:true}) OverseasAgentSubType: OverseasAgentSubType
   
    
  ): Promise<User[]> {
    return this.userService.filterlistNonApprovedUsersbyUserType(userType,CustomerSubType,VendorSubType,OverseasAgentSubType);
  }
  
   @Mutation(() => User)
  async approveUser(
    @Args({ name: 'userId', type: () => Int }) userId: number,
    @Args('input') input: Updateapproved,
   
    
   ): Promise<User> {
     return this.userService.approveUser(userId, input);
  }


  
  
}
