
import {Entity,Column,PrimaryGeneratedColumn,ManyToOne}  from 'typeorm'
import { ObjectType,Field,Int,ID } from '@nestjs/graphql'
import { transporterType } from '../enums/transporttypes.enums';
import {vehicleType}   from '../enums/vehicletype.enums';
import { maxacceptablePayload } from '../enums/maxacceptablepayload.enums';
import { PickupCityPincode } from '../enums/pickupcitypincode.enums';
import {pickupCity} from '../enums/pickupcity.enums';
import {dropCity } from '../enums/dropcity.enums';
import {DropCityPincode} from '../enums/dropCityPincode.enums';
import { User } from 'src/user/user.entity';
@Entity()
@ObjectType()
export class  TruckEntity{
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
   transportertype: transporterType;
   @Column({ type: 'enum', enum: vehicleType, nullable: true })
   @Field(() => vehicleType, { nullable: true })
     vehicletype: vehicleType;
     @Column({ type: 'enum', enum: maxacceptablePayload, nullable: true })
     @Field(() => maxacceptablePayload, { nullable: true })
     maxacceptablepayload: maxacceptablePayload;
    @Column({ type: 'enum', enum: pickupCity, nullable: true })
    @Field(() => pickupCity, { nullable: true })
    pickupcity: pickupCity;
    @Column({ type: 'enum', enum: PickupCityPincode, nullable: true })
    @Field(() => PickupCityPincode, { nullable: true })
     pickupcitypincode:PickupCityPincode;
    @Column({ type: 'enum', enum: dropCity, nullable: true })
    @Field(() => dropCity, { nullable: true })
     dropcity:dropCity;
    @Column({ type: 'enum', enum: DropCityPincode, nullable: true })
    @Field(() => DropCityPincode, { nullable: true })
     dropcitypincode:DropCityPincode;
    @Column({nullable: true})
    @Field({nullable: true})
    transportcharges:number;

    @ManyToOne(() => User, (user) => user.trucks)
    @Field(() => User, { nullable: true })
    user: User;
}