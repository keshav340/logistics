import { Field, Float, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Truck4 {
  @Field(() => Float, { nullable: true })
  price: number;

  @Field({ nullable: true })
  distance: string;

  @Field({ nullable: true })
  transitTime: string;

  @Field(() => Float, { nullable: true })
  originalPrice: number;

  @Field({ nullable: true })
  originalCurrency: string;

  @Field({ nullable: true })
  interpolation: boolean;
}

@ObjectType()
export class City4 {
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
export class Port4 {
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
export class AirFreight4 {
  @Field({ nullable: true })
  shippingLine: string;

  @Field({ nullable: true })
  logo: string;

  @Field(() => Float, { nullable: true })
  price: number;

//   @Field({ nullable: true })
//   comment: string;

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

  @Field({ nullable: true })
  overdue: boolean;

  @Field(() => [PortFees], { nullable: true })
  portFeesFrom: PortFees[];

  @Field(() => [PortFees], { nullable: true })
  portFeesTo: PortFees[];

  @Field(() => Truck4, { nullable: true })
  truckFrom: Truck4;

  @Field(() => Truck4, { nullable: true })
  truckTo: Truck4;
}

@ObjectType()
export class PortFees {
  @Field({ nullable: true })
  abbr: string;

  @Field({ nullable: true })
  title: string;

  @Field(() => Float, { nullable: true })
  originalPrice: number;

  @Field({ nullable: true })
  originalCurrency: string;

  @Field({ nullable: true })
  text: string;

  @Field(() => Float, { nullable: true })
  price: number;

  @Field({ nullable: true })
  perLot: boolean;
}


@ObjectType()
export class Shipmentair {
  @Field({ nullable: true })
  shipmentId: string;

  @Field({ nullable: true })
  transportationMode: string;

  @Field({ nullable: true })
  currency: string;

  @Field(() => City4, { nullable: true })
  cityFrom: City4;

  @Field(() => City4, { nullable: true })
  cityTo: City4;

  @Field(() => Port4, { nullable: true })
  portFrom: Port4;

  @Field(() => Port4, { nullable: true })
  portTo: Port4;

  @Field(() => AirFreight4, { nullable: true })
  airFreight: AirFreight4;
}

@ObjectType()
export class Default4 {
  @Field(() => [String], { nullable: true })
  services: string[];
}

@ObjectType()
export class ShipmentData {
  @Field(() => [Shipmentair], { nullable: true })
  shipment: Shipmentair[];

  @Field(() => Default4, { nullable: true })
  default: Default4;
}
