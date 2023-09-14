import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CommonUserInput } from './user-input.dto';
import { User } from './user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(returns => User) // Specify the return type
  async registerCustomer(@Args('input') input: CommonUserInput): Promise<User> {
    return this.userService.registerCustomer(input);
  }

  @Mutation(returns => User) // Specify the return type
  async registerVendor(@Args('input') input: CommonUserInput): Promise<User> {
    return this.userService.registerVendor(input);
  }

  @Mutation(returns => User) // Specify the return type
  async registerAgent(@Args('input') input: CommonUserInput): Promise<User> {
    return this.userService.registerAgent(input);
  }
}
