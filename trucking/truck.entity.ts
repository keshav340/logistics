
import {Entity,Column,PrimaryGeneratedColumn,ManyToOne}  from 'typeorm'
import { ObjectType,Field,Int,ID } from '@nestjs/graphql'
import { transporterType } from '../enums/transporttypes.enums';
import { vehicleType } from '../enums/vehicletype.enums';
import { pickupCity } from '../enums/pickupcity.enums';
import { PickupCityPincode } from '../enums/pickupcitypincode.enums';
import { dropCity } from '../enums/dropCity.enums';
import { DropCityPincode } from '../enums/dropCityPincode.enums';
import { basisofCharges } from '../enums/basisofcharges.enums';

@Entity()
@ObjectType()
export class Trucking{
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    @Field()
    companyName: string;
    @Column()
    @Field()
    Adress: string;
    @Column({nullable:true})
    @Field({nullable:true})
    State: string;
    @Column({nullable:true})
    @Field({nullable:true})
    City: string;
    @Column({nullable:true})
    @Field({nullable:true})
    Pincode: string;
    @Column({nullable:true})
    @Field({nullable:true})
    Country: string;
    @Column({ type: 'enum', enum: transporterType, nullable: true })
   @Field(() => transporterType, { nullable: true })
   transporterType: transporterType| null
   @Column({ type: 'enum', enum: vehicleType, nullable: true })
   @Field(() => vehicleType, { nullable: true })
   vehicleType: vehicleType| null
   @Column({ type: 'enum', enum: pickupCity, nullable: true })
   @Field(() => pickupCity, { nullable: true })
   pickupCity: pickupCity| null
   @Column({ type: 'enum', enum: PickupCityPincode, nullable: true })
   @Field(() => PickupCityPincode, { nullable: true })
   PickupCityPincode: PickupCityPincode| null
   @Column({ type: 'enum', enum: dropCity, nullable: true })
   @Field(() => dropCity, { nullable: true })
   dropCity: dropCity| null
   @Column({ type: 'enum', enum: DropCityPincode, nullable: true })
   @Field(() => DropCityPincode, { nullable: true })
   DropCityPincode: DropCityPincode| null
   @Column({nullable:true})
    @Field({nullable:true})
    transportCharges: string;
   @Column({ type: 'enum', enum: basisofCharges, nullable: true })
   @Field(() =>basisofCharges, { nullable: true })
   basisofCharges: basisofCharges| null

}