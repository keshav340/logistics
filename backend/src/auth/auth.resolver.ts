import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver ,} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.entity';
import { LoginUserInput } from './dto/login-user.input';
import { LoginResponse } from './dto/login-response.input';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { ResetPasswordInput } from './resetpassword.input';
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    const loginResponse = await this.authService.login(loginUserInput);
    return loginResponse;
  }
  @Mutation(() => Boolean)
  async logout(@Args('userId') userId: number): Promise<boolean> {
   

    await this.authService.logout(userId);

    return true; 
  }
  @Mutation(() => String)
  async reset_password_token(
    @Args('email') email: string): Promise<string> {
      await this.authService.reset_password_token(email);
      return "One time password has been sent to reset the password."
     
    }

    @Mutation(()=>String)
    async reset_password_verify(
      @Args('email') email:string,
      @Args('resettoken') resettoken: string): Promise<string> {
      await this.authService.resetPassword(email,resettoken);
      return "otp has been verified"
      }
    @Mutation(()=>String)
    async reset_Save_password(
      @Args('email') email:string,
      @Args('password') password:ResetPasswordInput): Promise<string> {
        await this.authService.setNewPassword(email,password);
        return "password has been  changed"
      }
    

}