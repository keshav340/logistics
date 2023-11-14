import {Entity,Column,PrimaryGeneratedColumn,OneToOne,Unique} from 'typeorm'
import { ObjectType,Field,Int,ID } from '@nestjs/graphql'
@ObjectType()
@Entity()
export class kycdocuments{
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number;
    @Column({nullable:true})
    @Field({nullable:true})
    certiicateofRegisteration:string;
    @Column({nullable:true})
    @Field({nullable:true})
    company_pan_card:string;
    @Column({nullable:true})
    @Field({nullable:true})
    Aadhar_card_person:string;
    @Column({nullable:true})
    @Field({nullable:true})
    pan_Card_person:string;
    @Column({nullable:true})
    @Field({nullable:true})
    iso_certificate:string;
    @Column({nullable:true})
    @Field({nullable:true})
    aeo_cerificate:string;
    @Column({nullable:true})
    @Field({nullable:true})
    duns_certificate:string;
    manufacturing_license:string;
    @Column({nullable:true})
    @Field({nullable:true})
    any_other_trading_license:string;
    @Column({nullable:true})
    @Field({nullable:true})
    warehouse_insurance:string;
}