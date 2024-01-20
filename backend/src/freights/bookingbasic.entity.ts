import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'
import { ObjectType,Field,ID,Int,Float } from '@nestjs/graphql'

@Entity()
@ObjectType()
export class Bookingshippingbasicquestion{
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number
    @Column({nullable:true})
    @Field({nullable:true})
    customclearance:boolean
    @Column({nullable:true})
    @Field({nullable:true})
    insurance:boolean
    @Column({nullable:true})
    @Field({nullable:true})
    inspectionservice:boolean
    @Column({nullable:true})
    @Field({nullable:true})
    defercargopayment:boolean
    @Column({nullable:true})
    @Field({nullable:true})
    offsetcarbonfootprint:boolean
    
   
}