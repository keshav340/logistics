// src/booking/booking.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { WareHouse } from '../warehouse/warehouse.entity';
import { User } from 'src/user/user.entity';
@Entity()
@ObjectType()
export class Booking {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  // Other fields...

  @Column({ type: 'timestamp', nullable: true })
  @Field(() => Date, { nullable: true })
  moveInDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  @Field(() => Date, { nullable: true })
  moveOutDate: Date;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  spaceMaterialType: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  specialInstructions: string;
  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
   uniquecode: string;
  @OneToOne(() => WareHouse, { nullable: true })
  @JoinColumn()
  @Field(() => WareHouse, { nullable: true })
  warehouse: WareHouse;
  @ManyToOne(() => User, (user) => user.bookings) // Many bookings can belong to one user
  @Field(() => User, { nullable: true })
  user: User;
}
