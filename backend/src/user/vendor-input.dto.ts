// vendor/vendor.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { CommonUserInput } from 'src/user/user-input.dto'
import { VendorSubType } from 'src/enums/user.enums';
@InputType()
export class VendorInput {
    @Field()
    company_registration_no:string
    @Field()
    company_pan_no :string
    @Field()
    gst_no :string
    //@Field(() => VendorSubType, { nullable: true })
    //subTypes?: [VendorSubType];
  
 
}
