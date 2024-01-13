// company-contact.entity.ts

import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { ObjectType, Field, ID,Float } from '@nestjs/graphql';
import { City } from './shipment.model';
import { ShippingMode } from './code.enums';

@Entity()
@ObjectType()
export class CodeEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
  @Column({nullable:true})
  @Field({nullable:true})
  Country: string;
  @Column({nullable:true})
  @Field({nullable:true})
  State:string;
  @Column({type:'enum',enum:ShippingMode,nullable:true})
   @Field(()=>ShippingMode,{nullable:true})
   shippingMode:ShippingMode | null;

   @Column({nullable:true})
   @Field({nullable:true})
   name:string;

  // @Column({nullable:true})
  // @Field({nullable:true})
  // name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  code: string;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true }) // Use 'decimal' type for latitude
  @Field(() => Float, { nullable: true }) // Use Float scalar for GraphQL schema
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true }) // Use 'decimal' type for longitude
  @Field(() => Float, { nullable: true }) // Use Float scalar for GraphQL schema
  longitude: number;
}
