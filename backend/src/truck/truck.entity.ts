
import {Entity,Column,PrimaryGeneratedColumn,ManyToOne}  from 'typeorm'
import { ObjectType,Field,Int,ID } from '@nestjs/graphql'
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


}