import { InputType,ObjectType,Field,ID } from "@nestjs/graphql";
import { warehouseType } from "src/enums/warehouse.enums";
@InputType()
export class WarehouseInput{
    @Field()
     companyName:string;
     @Field()
     Adress:string;
     @Field()
     state:string;
     @Field()
     city:string;
     @Field()
     pincode:string;
     @Field()
    country:string;
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



}