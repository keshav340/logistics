// user.resolver.ts
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserInput, CustomerInput, VendorInput, OverseasAgentInput } from './user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async registerUser(@Args('input') input: UserInput): Promise<User> {
    switch (input.userType) {
      case UserType.CUSTOMER:
        const customerInput: CustomerInput = input as CustomerInput;
        return this.userService.registerCustomer(customerInput);
      case UserType.VENDOR:
        const vendorInput: VendorInput = input as VendorInput;
        return this.userService.registerVendor(vendorInput);
      case UserType.OVERSEAS_AGENT:
        const agentInput: OverseasAgentInput = input as OverseasAgentInput;
        return this.userService.registerAgent(agentInput);
      default:
        throw new Error('Invalid user type');
    }
  }
}
