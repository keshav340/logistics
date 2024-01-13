// airport.dto.ts

import { InputType, Field,Float } from '@nestjs/graphql';
import { ShippingMode } from './code.enums';
@InputType()
export class CreateAirportInput {
  @Field({nullable:true})
  code: string;

  @Field(() => Float, { nullable: true }) // Use Float scalar for latitude
  latitude?: number;

  @Field(() => Float, { nullable: true }) // Use Float scalar for longitude
  longitude?: number;
  @Field({nullable:true})
  Country: string;
  @Field({nullable:true})
  State: string;
  @Field({nullable:true})
  name:string;

  @Field(() => ShippingMode, { nullable: true })
 ShipmentMode?: ShippingMode;
 



}
