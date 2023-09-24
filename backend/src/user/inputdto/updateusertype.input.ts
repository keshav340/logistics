import { InputType, Field } from "@nestjs/graphql";
import { UserType } from "src/enums/user.enums";
@InputType()
export class updateUsertype{
    @Field(()=>UserType,{nullable:true})
    userType:UserType
}