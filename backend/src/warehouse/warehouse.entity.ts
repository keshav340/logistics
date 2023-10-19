
import {Entity,Column,PrimaryGeneratedColumn}  from 'typeorm'
import { ObjectType,Field,Int,ID } from '@nestjs/graphql'
import { warehouseType } from 'src/enums/warehouse.enums';
@Entity()
@ObjectType()
export class WareHouse{
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
    @Column({ type: 'enum', enum: warehouseType, nullable: true })
    @Field(() => warehouseType, { nullable: true })
    warehouseType: warehouseType | null
    @Column({nullable:true})
    @Field({nullable:true})
    totalSquareArea: string;
    @Column({nullable:true})
    @Field({nullable:true})
    totalAvailiableArea: string;
    @Column({nullable:true})
    @Field({nullable:true})
    occupiedSpace: string
    @Column({nullable:true})
    @Field({nullable:true})
    unoccupiedSpace:string
    @Column({nullable:true})
    @Field({nullable:true})
    rackedSpace:string


}