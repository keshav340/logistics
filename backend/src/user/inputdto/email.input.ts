import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class EmailInput {
    @Field()
    email: string;
    @Field()
    otp: string;
}