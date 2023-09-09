// vendor/vendor.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { CommonUserInput } from '../common/common-user.input';

@InputType()
export class VendorInput {
  @Field()
  companyName: string;

  // Add other fields specific to vendors here

  @Field(() => CommonUserInput)
  commonData: CommonUserInput;
}
