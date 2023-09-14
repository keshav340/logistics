// src/warehouse/entities/warehouse.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int,ID } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Warehouse {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  
  id: number;

  @Column()
  @Field()
  address: string;

  @Column()
  @Field()
  state: string;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  pinCode: string;

  @Column()
  @Field()
  country: string;
}
