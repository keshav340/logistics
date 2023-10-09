import { InputType,Field } from "@nestjs/graphql";
@InputType()
export class RejectInputType{
    @Field({nullable:true})
    remarks:string;
}