// companycontact.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';

@Entity()
@ObjectType()
export class companyContact {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  Designation: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  Mobileno: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  emailid: string;

  @OneToOne(() => User, (user) => user.CompanyContact, { cascade: true })
  @JoinColumn()
  @Field(() => User, { nullable: true })
  user: User;
}
