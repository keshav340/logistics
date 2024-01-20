// bookingshipping.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookingshippingInput {
  @Field({ nullable: true })
  departure: string;

  @Field({ nullable: true })
  arrival: string;

  @Field({ nullable: true })
  readytoload: string;

  @Field({ nullable: true })
  typeofdelivery: string;

  @Field({ nullable: true })
  cargo_details: string;

  @Field({ nullable: true })
  price: string;
}
