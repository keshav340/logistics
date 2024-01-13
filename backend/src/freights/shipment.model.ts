
import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class City {
  
  @Field({nullable:true})
  name: string;

  @Field({nullable:true})
  countryCode: string;
}

@ObjectType()
export class Port {
  @Field({nullable:true})
  name: string;

  @Field({nullable:true})
  code: string;

  @Field({nullable:true})
  countryCode: string;
}

@ObjectType()
export class OceanFreight {
  @Field(() => Float,{nullable:true})
  price: number;

  @Field({nullable:true})
  transitTime: string;

  @Field({nullable:true})
  shippingLine: string;
}

@ObjectType()
export class Shipment {
  @Field({nullable:true})
  shipmentId: string;
  // @Field({nullable:true})
  // transportationMode: string;


  @Field(() => City,{nullable:true})
  cityFrom: City;

  @Field(() => City,{nullable:true})
  cityTo: City;

  @Field(() => Port,{nullable:true})
  portFrom: Port;

  @Field(() => Port,{nullable:true})
  portTo: Port;

  @Field(() => [OceanFreight],{nullable:true})
  freight: OceanFreight[];
}
