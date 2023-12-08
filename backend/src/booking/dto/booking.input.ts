// src/booking/dto/booking.input.ts

import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class BookingInput {
  @Field({ nullable: true })
  moveInDate?: Date;

  @Field({ nullable: true })
  moveOutDate?: Date;

  @Field({ nullable: true })
  spaceMaterialType?: string;

  @Field({ nullable: true })
  specialInstructions?: string;

  @Field(() => Int, { nullable: true })
  warehouseId?: number;

  @Field(() => Int, { nullable: true })
  userId?: number; 
}
