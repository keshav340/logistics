import { InputType,Field } from "@nestjs/graphql";
import { UserType } from "src/enums/user.enums";
@InputType()
export class Admin{
@Field(() => UserType, { nullable: true })
 userType: UserType;
 @Field({ nullable: true })
  first_name: string;
  
  @Field({ nullable: true })
  last_name: string;
  
  @Field({ nullable: true })
  Designation: string;
  
  @Field({ nullable: true })
  mobile: string;
  
  @Field({ nullable: true })
  website: string;
  @Field({ nullable: true })
  email: string;
  @Field({ nullable: true })
  password: string;
  
  @Field({ nullable: true })
  confirmpassword: string;
  
 

}