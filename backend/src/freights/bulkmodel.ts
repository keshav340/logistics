import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class City2 {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  code: string;

  @Field({ nullable: true })
  countryCode: string;

  @Field(() => Float, { nullable: true })
  lat: number;

  @Field(() => Float, { nullable: true })
  lng: number;
}

@ObjectType()
export class Port2 {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  code: string;

  @Field({ nullable: true })
  countryCode: string;

  @Field(() => Float, { nullable: true })
  lat: number;

  @Field(() => Float, { nullable: true })
  lng: number;
}

@ObjectType()
export class Rail {
  @Field(() => Float, { nullable: true })
  price: number;

  @Field({ nullable: true })
  distance: string;

  @Field({ nullable: true })
  transitTime: string;

  @Field({ nullable: true })
  interpolation: boolean;
}

@ObjectType()
export class OceanFreight2 {
  @Field({ nullable: true })
  shippingLine: string;

  @Field({ nullable: true })
  logo: string;

  @Field(() => Float, { nullable: true })
  price: number;

  @Field({ nullable: true })
  comment: string;

  @Field({ nullable: true })
  distance: string;

  @Field(() => Float, { nullable: true })
  originalPrice: number;

  @Field({ nullable: true })
  originalCurrency: string;

  @Field({ nullable: true })
  transitTime: string;

  @Field({ nullable: true })
  validTo: string;

  @Field(() => Float, { nullable: true })
  co2: number;

  @Field({ nullable: true })
  overdue: boolean;

  @Field(() => Rail, { nullable: true })
  railFrom: Rail;

  @Field(() => Rail, { nullable: true })
  railTo: Rail;
}

@ObjectType()
export class Shipmentbulk {
  @Field({ nullable: true })
  shipmentId: string;

  @Field({ nullable: true })
  transportationMode: string;

  @Field({ nullable: true })
  currency: string;

  @Field(() => City2, { nullable: true })
  cityFrom: City2;

  @Field(() => City2, { nullable: true })
  cityTo: City2;

  @Field(() => Port2, { nullable: true })
  portFrom: Port2;

  @Field(() => Port2, { nullable: true })
  portTo: Port2;

  @Field(() => OceanFreight2, { nullable: true })
  oceanFreight: OceanFreight2;
}

@ObjectType()
export class Default {
  @Field(() => [String], { nullable: true })
  services: string[];
}

@ObjectType()
export class ShipmentData {
  @Field(() => [Shipmentbulk], { nullable: true })
  shipment: Shipmentbulk[];

  @Field(() => Default, { nullable: true })
  default: Default;
}
