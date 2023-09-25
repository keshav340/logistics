// updateusertype.input.ts
import { InputType, Field } from "@nestjs/graphql";
import { UserType } from "src/enums/user.enums";

@InputType()
export class UpdateUsertype { // Use the correct casing here (UpdateUsertype)
  @Field(() => UserType, { nullable: true })
  userType: UserType;
}
