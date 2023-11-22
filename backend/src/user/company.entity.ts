// company-contact.entity.ts
import { Entity, Column, PrimaryGeneratedColumn,OneToOne } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';

@Entity()
@ObjectType()
export class CompanyContact {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  designation: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  mobileNo: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  emailId: string;
  //@OneToOne(() => User, (user) => user.companyContact) 
  //@Field(() => User, { nullable: true })
  //user: User;
}
