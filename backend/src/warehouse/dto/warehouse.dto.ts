import { InputType,ObjectType,Field,ID,Float} from "@nestjs/graphql";
import { warehouseType } from "src/enums/warehouse.enums";
import { temperatureType } from 'src/enums/temperaturetype.enums';
import { temperatureCapacity } from 'src/enums/temperaturecapacity.enums';
import { hazardousStorageType } from 'src/enums/hazardousstorage.enums';
import { warehouseApproval } from "src/enums/warehouse_approval.enums";
@InputType()
export class WarehouseInput{
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
    @Field(() => warehouseType, { nullable: true })
    warehouseType:warehouseType
    @Field({nullable:true})
    totalSquareArea:string;
    @Field({nullable:true})
    totalAvailiableArea:string;
    @Field({nullable:true})
    occupiedSpace:string;
    @Field({nullable:true})
    unoccupiedSpace:string;
    @Field({nullable:true})
    rackedSpace:string;
    @Field({nullable:true})
    minimumStorageRent:number
    @Field({nullable:true})
  minimumStorageCharges_per_pallet:number
  @Field({nullable:true})
  minimumStorageArea :string
  @Field({nullable:true})
  minimumstorageArea_per_pallet :string
  @Field({nullable:true})
  storageCharges:number
  @Field({nullable:true})
storageCharges_per_pallet:number
@Field(() => hazardousStorageType, { nullable: true })
hazardousStorageType: hazardousStorageType| null
@Field(() => temperatureType,{nullable:true})
temperatureType:temperatureType| null
@Field(() => temperatureCapacity,{nullable:true})
temperatureCapacity:temperatureCapacity| null
@Field()
userId:number
@Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;





}