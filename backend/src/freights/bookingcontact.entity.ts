import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'
import { ObjectType,Field,ID,Int,Float } from '@nestjs/graphql'

@Entity()
@ObjectType()
export class BookingshippingContactinfo{
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number
    @Column({nullable:true})
    @Field({nullable:true})
    firstname:string
    @Column({nullable:true})
    @Field({nullable:true})
    lastname:string
    @Column({nullable:true})
    @Field({nullable:true})
    phoneno:string
    @Column({nullable:true})
    @Field({nullable:true})
    email:string
    @Column({nullable:true})
    @Field({nullable:true})
    description:string
    
   
}