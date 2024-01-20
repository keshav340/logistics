import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'
import { ObjectType,Field,ID,Int,Float } from '@nestjs/graphql'

@Entity()
@ObjectType()
export class Bookingshipping{
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number
    @Column({nullable:true})
    @Field({nullable:true})
    departure:string
    @Column({nullable:true})
    @Field({nullable:true})
    arrival:string
    @Column({nullable:true})
    @Field({nullable:true})
    readytoload:string
    @Column({nullable:true})
    @Field({nullable:true})
    typeofdelivery:string
    @Column({nullable:true})
    @Field({nullable:true})
    cargo_details:string
    @Column({nullable:true})
    @Field({nullable:true})
    price:string
   
}