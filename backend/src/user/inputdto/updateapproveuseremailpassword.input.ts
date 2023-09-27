import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class Updateemailpasswordapproved {
    @Field()
    email: string;
   @Field()
   password: string;
}