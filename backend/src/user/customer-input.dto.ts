// customer/customer.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { CommonUserInput } from '../common/common-user.input';

@InputType()
export class CustomerInput {
  @Field()
  company_registration_no:string
  @Field()
  company_pan_no :string
  @Field()
  gst_no :string

 

  @Field(() => CommonUserInput)
  commonData: CommonUserInput;
}
