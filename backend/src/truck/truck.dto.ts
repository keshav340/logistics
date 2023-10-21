
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TruckDTO {
  @Field({ nullable: true })
  companyName: string;

  @Field({ nullable: true })
  Adress: string;

  @Field({ nullable: true })
  State: string;

  @Field({ nullable: true })
  City: string;

  @Field({ nullable: true })
  Pincode: string;

  @Field({ nullable: true })
  Country: string;
}
