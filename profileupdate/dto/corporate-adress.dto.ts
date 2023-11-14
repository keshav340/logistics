// corporate-address.dto.ts

import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CorporateAddressDto {
 

  @Field({ nullable: true })
  Address?: string;

  @Field({ nullable: true })
  State?: string;

  @Field({ nullable: true })
  City?: string;

  @Field({ nullable: true })
  pincode?: string;

  @Field({ nullable: true })
  country?: string;
}
