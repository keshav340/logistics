import { Field, Float, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class City1 {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  code: string;

  @Field({ nullable: true })
  lat: number;

  @Field({ nullable: true })
  lng: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  countryCode: string;
}

@ObjectType()
export class PortFee {
  @Field()
  abbr: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  text: string;

  @Field(() => Float)
  originalPrice: number;

  @Field()
  originalCurrency: string;

  @Field(() => Float)
  price: number;

  @Field()
  perLot: boolean;
}

@ObjectType()
export class Truck {
  @Field(() => Float)
  price: number;

  @Field()
  distance: string;

  @Field()
  transitTime: string;

  @Field(() => Float)
  originalPrice: number;

  @Field()
  originalCurrency: string;

  @Field({ nullable: true })
  interpolation: boolean;
}

@ObjectType()
export class OceanFreight1 {
  @Field({ nullable: true })
  shippingLine: string;

  @Field({ nullable: true })
  logo: string;

  @Field(() => Float, { nullable: true })
  price: number;

  @Field({ nullable: true })
  distance: string;

  @Field({ nullable: true })
  comment: string;

  @Field(() => Float, { nullable: true })
  originalPrice: number;

  @Field({ nullable: true })
  originalCurrency: string;

  @Field({ nullable: true })
  overdue: boolean;

  @Field(() => Float, { nullable: true })
  co2: number;

  @Field({ nullable: true })
  transitTime: string;

  @Field(() => [PortFee], { nullable: true })
  portFeesFrom: PortFee[];

  @Field(() => [PortFee], { nullable: true })
  portFeesTo: PortFee[];

  @Field(() => Truck, { nullable: true })
  truckFrom: Truck;

  @Field(() => Truck, { nullable: true })
  truckTo: Truck;
}
@ObjectType()
export class Port1 {
    @Field({ nullable: true })
    id:number;
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  code: string;

  @Field({ nullable: true })
  countryCode: string;
  @Field({ nullable: true })
  lat: number;
  @Field({ nullable: true })
  lng: number;
}

@ObjectType()
export class Shipmentlcl {
  @Field({ nullable: true })
  shipmentId: string;

  @Field({ nullable: true })
  transportationMode: string;

  @Field({ nullable: true })
  currency: string;

  @Field(() => City1, { nullable: true })
  cityFrom: City1;

  @Field(() => City1, { nullable: true })
  cityTo: City1;

  @Field(() => Port1, { nullable: true })
  portFrom: Port1;

  @Field(() => Port1, { nullable: true })
  portTo: Port1;

  @Field(() => OceanFreight1, { nullable: true })
  oceanFreight: OceanFreight1;
}
