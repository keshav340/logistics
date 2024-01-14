import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Coordinates {
  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lng: number;
}

@ObjectType()
class City {
  @Field(() => Float)
  id: number;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  countryCode: string;

  @Field(() => Coordinates)
  coordinates: Coordinates;
}

@ObjectType()
class Port {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  countryCode: string;

  @Field(() => Coordinates)
  coordinates: Coordinates;
}

@ObjectType()
class PortFee {
  @Field()
  abbr: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  text?: string;

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
class Truck {
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
  interpolation?: boolean;
}

@ObjectType()
class AirFreight {
  @Field({ nullable: true })
  shippingLine: string;

  @Field()
  logo: string;

  @Field(() => Float)
  price: number;

  @Field()
  distance: string;

  @Field(() => Float)
  originalPrice: number;

  @Field()
  originalCurrency: string;

  @Field()
  transitTime: string;

  @Field({ nullable: true })
  validTo?: string;

  @Field()
  overdue: boolean;

  @Field(() => [PortFee])
  portFeesFrom: PortFee[];

  @Field(() => [PortFee])
  portFeesTo: PortFee[];

  @Field(() => Truck)
  truckFrom: Truck;

  @Field(() => Truck)
  truckTo: Truck;
}

@ObjectType()
class Shipment {
  @Field()
  shipmentId: string;

  @Field()
  transportationMode: string;

  @Field()
  currency: string;

  @Field(() => City)
  cityFrom: City;

  @Field(() => City)
  cityTo: City;

  @Field(() => Port)
  portFrom: Port;

  @Field(() => Port)
  portTo: Port;

  @Field(() => AirFreight)
  airFreight: AirFreight;
}

@ObjectType()
class ShipmentResponse {
  @Field(() => [Shipment])
  shipment: Shipment[];

  @Field(() => [String])
  default: string[];
}
