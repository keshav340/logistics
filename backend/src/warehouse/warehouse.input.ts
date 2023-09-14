// src/warehouse/dto/warehouse.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class WarehouseInput {
  @Field()
  address: string;

  @Field()
  state: string;

  @Field()
  city: string;

  @Field()
  pinCode: string;

  @Field()
  country: string;
}
