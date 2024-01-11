// airport.dto.ts

import { InputType, Field,Float } from '@nestjs/graphql';

@InputType()
export class CreateAirportInput {
  @Field()
  code: string;

  @Field(() => Float, { nullable: true }) // Use Float scalar for latitude
  latitude?: number;

  @Field(() => Float, { nullable: true }) // Use Float scalar for longitude
  longitude?: number;
}
