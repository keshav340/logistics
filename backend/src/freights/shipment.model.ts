
import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class City {
  @Field()
  name: string;

  @Field()
  countryCode: string;
}

@ObjectType()
export class Port {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  countryCode: string;
}

@ObjectType()
export class OceanFreight {
  @Field(() => Float)
  price: number;

  @Field()
  transitTime: string;

  @Field()
  shippingLine: string;
}

@ObjectType()
export class Shipment {
  @Field()
  shipmentId: string;

  @Field(() => City)
  cityFrom: City;

  @Field(() => City)
  cityTo: City;

  @Field(() => Port)
  portFrom: Port;

  @Field(() => Port)
  portTo: Port;

  @Field(() => [OceanFreight])
  freight: OceanFreight[];
}
