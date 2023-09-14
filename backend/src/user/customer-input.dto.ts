// customer/customer.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { CommonUserInput } from 'src/user/user-input.dto'
import { CustomerSubType } from 'src/enums/user.enums';
@InputType()
export class CustomerInput {
  @Field()
  company_registration_no:string
  @Field()
  company_pan_no :string
  @Field()
  gst_no :string
  
  //@Field(() => CustomerSubType, { nullable: true })
  //subTypes?:[CustomerSubType];

 

 
}
