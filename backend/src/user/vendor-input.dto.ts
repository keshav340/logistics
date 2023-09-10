// vendor/vendor.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { CommonUserInput } from '../common/common-user.input';

@InputType()
export class VendorInput {
    @Field()
    company_registration_no:string
    @Field()
    company_pan_no :string
    @Field()
    gst_no :string
  
  // Add other fields specific to vendors here

  @Field(() => CommonUserInput)
  commonData: CommonUserInput;
}
