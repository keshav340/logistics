// common/common-user.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { UserType } from '../enums/user.enums';

@InputType()
export class CommonUserInput {
  @Field(() => UserType)
  userType: UserType;

  @Field(() => [String], { nullable: true })
  subTypes: string[];
}
