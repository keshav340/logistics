// overseas-agent/overseas-agent.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { CommonUserInput } from 'src/user/user-input.dto'
import { OverseasAgentSubType } from 'src/enums/user.enums';
@InputType()
export class OverseasAgentInput {
  @Field()
  zip_code: string;
  @Field()
  Business_License_no: string;
  @Field()
  Company_tax_id_no: string;
  // @Field(() =>OverseasAgentSubType, { nullable: true,defaultValue: [] })
  // subTypes?: OverseasAgentSubType;

 
}
