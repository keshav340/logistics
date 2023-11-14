// corporateadress.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';

@Entity()
@ObjectType()
export class corporateAdress {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  Adress: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  State: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  City: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  pincode: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  country: string;

  @OneToOne(() => User, (user) => user.CorporateAddress)
  @Field(() => User, { nullable: true })
  @JoinColumn()
  user: User;
}
