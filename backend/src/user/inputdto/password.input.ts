import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class Password{
    @Field()
    password: string;
    @Field()
    confirmPassword: string;
}