
import { Field, InputType } from '@nestjs/graphql';
import { transporterType } from '../enums/transporttypes.enums';
import {vehicleType } from "../enums/vehicletype.enums"
import { maxacceptablePayload } from '../enums/maxacceptablepayload.enums';
import { PickupCityPincode } from '../enums/pickupcitypincode.enums';
import {pickupCity}   from '../enums/pickupcity.enums';
import {dropCity } from '../enums/dropcity.enums';
import {DropCityPincode} from '../enums/dropCityPincode.enums';

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

  @Field(() => transporterType, { nullable: true })
  transportertype: transporterType;
  @Field(() => vehicleType, { nullable: true })
  vehicletype: vehicleType;
  @Field(() => maxacceptablePayload, { nullable: true })
  maxacceptablepayload: maxacceptablePayload;
  @Field(() => pickupCity, { nullable: true })
  pickupcity: pickupCity;
  @Field(() => PickupCityPincode, { nullable: true })
    pickupcitypincode:PickupCityPincode;
  @Field(() => dropCity, { nullable: true })
  dropcity:dropCity;
  @Field(() => DropCityPincode, { nullable: true })
  dropcitypincode:DropCityPincode;
  @Field({nullable: true})
  transportcharges:number;
@Field({nullable:true})
  userId:number;



}
