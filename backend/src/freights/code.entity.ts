// company-contact.entity.ts

import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { ObjectType, Field, ID,Float } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class AirportPortCode {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

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
