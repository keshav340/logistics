import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class BookingshippingContactinfoInput {
  @Field({ nullable: true })
  firstname?: string;

  @Field({ nullable: true })
  lastname?: string;

  @Field({ nullable: true })
  phoneno?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  description?: string;
}
