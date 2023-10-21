import { InputType,ObjectType,Field,ID } from "@nestjs/graphql";
import { transporterType } from '../../enums/transporttypes.enums';
import { vehicleType } from '../../enums/vehicletype.enums';
import { pickupCity } from '../../enums/pickupcity.enums';
import { PickupCityPincode } from '../../enums/pickupcitypincode.enums';
import { dropCity } from '../../enums/dropCity.enums';
import { DropCityPincode } from '../../enums/dropCityPincode.enums';
import { basisofCharges } from '../../enums/basisofcharges.enums';

@InputType()
export class truckInput{
    @Field({nullable:true})
     companyName:string;
     @Field({nullable:true})
     Adress:string;
     @Field({nullable:true})
    State: string;
    @Field({nullable:true})
    City: string;
    @Field({nullable:true})
    Pincode: string;
    @Field({nullable:true})
    Country: string;
    @Field(() => transporterType, { nullable: true })
   transporterType: transporterType| null
   @Field(() => vehicleType, { nullable: true })
   vehicleType: vehicleType| null
   @Field(() => pickupCity, { nullable: true })
   pickupCity: pickupCity| null
   @Field(() => PickupCityPincode, { nullable: true })
   PickupCityPincode: PickupCityPincode| null
   @Field(() => dropCity, { nullable: true })
   dropCity: dropCity| null
   @Field(() => DropCityPincode, { nullable: true })
   DropCityPincode: DropCityPincode| null
   @Field({nullable:true})
   transportCharges: string;
   @Field(() =>basisofCharges, { nullable: true })
   basisofCharges: basisofCharges| null


    




}