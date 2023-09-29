import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver ,} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.entity';
import { LoginUserInput } from './dto/login-user.input';
import { LoginResponse } from './dto/login-response.input';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    const loginResponse = await this.authService.login(loginUserInput);
    return loginResponse;
  }

}