// customer/customer.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { CommonUserInput } from '../common/common-user.input';

@InputType()
export class CustomerInput {
  @Field()
  companyName: string;

  // Add other fields specific to customers here

  @Field(() => CommonUserInput)
  commonData: CommonUserInput;
}
