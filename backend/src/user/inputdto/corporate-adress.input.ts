import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CorporateAddressDto {
  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  state: string;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  pincode: string;

  @Field({ nullable: true })
  country: string;
}