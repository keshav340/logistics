import { InputType,ObjectType,Field,ID,Float } from "@nestjs/graphql";
import { warehouseType } from "src/enums/warehouse.enums";
import { temperatureType } from 'src/enums/temperaturetype.enums';
import { temperatureCapacity } from 'src/enums/temperaturecapacity.enums';
import { hazardousStorageType } from 'src/enums/hazardousstorage.enums';
@InputType()
export class ApprovedWarehouseInput{
    @Field({nullable:true})
    companyname:string;
    @Field({nullable:true})
    Adress:string;
    @Field({nullable:true})
     State:string;
     @Field({nullable:true})
     city:string;
     @Field({nullable:true})
     pincode:string;
     @Field({nullable:true})
     country:string;
     @Field(()=>warehouseType,{nullable:true})
     WarehouseType: warehouseType;
     @Field({nullable:true})
     totalsquareArea:string;
     @Field({nullable:true})
     totalavailiableareas:string;
     @Field({nullable:true})
      occupied_spaces:string;
    @Field({nullable:true})
    unoccupied_spaces:string;
    @Field({nullable:true})
    racked_spaces:string;
    @Field({nullable:true})
    minimumstoragerent:number;
    @Field({nullable:true})
    minimum_storages_charges_per_pallet:number;
    @Field({nullable:true})
    minimum_storage_Area:string;
    @Field({nullable:true})
    minimum_storage_area_per_pallet:string;
    @Field({nullable:true})
    storage_charges:number;
    @Field({nullable:true})
    storage_charges_per_pallet:number;
    @Field(()=>hazardousStorageType,{nullable:true})
    HazardousStorageType:hazardousStorageType;
    @Field(()=>temperatureType,{nullable:true})
    TempaeratureType:temperatureType
    @Field(()=>temperatureCapacity,{nullable:true})
    TemperatureCapacity:temperatureCapacity;
    @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;
    @Field({nullable:true})
    remarks:string;
}