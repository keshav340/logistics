// overseas-agent/overseas-agent.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { CommonUserInput } from '../common/common-user.input';

@InputType()
export class OverseasAgentInput {
  @Field()
  companyName: string;

  // Add other fields specific to overseas agents here

  @Field(() => CommonUserInput)
  commonData: CommonUserInput;
}
