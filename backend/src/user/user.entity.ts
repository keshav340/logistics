import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int,ID } from '@nestjs/graphql'; // Import the necessary decorators
import { CustomerSubType, UserType, VendorSubType, OverseasAgentSubType } from 'src/enums/user.enums';
@Entity()
@ObjectType() // Decorate your class with @ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: UserType,nullable: true })
  @Field(() => UserType,{nullable:true})
  userType: UserType;

  @Column({ type: 'enum', enum: CustomerSubType, nullable: true })
  @Field(() => CustomerSubType, { nullable: true }) // Decorate the field with @Field() and the correct type
  customerSubType: CustomerSubType | null;

  @Column({ type: 'enum', enum: VendorSubType, nullable: true })
  @Field(() => VendorSubType, { nullable: true }) // Decorate the field with @Field() and the correct type
  vendorSubType: VendorSubType | null;

  @Column({ type: 'enum', enum: OverseasAgentSubType, nullable: true })
  @Field(() => OverseasAgentSubType, { nullable: true }) // Decorate the field with @Field() and the correct type
  overseasAgentSubType: OverseasAgentSubType | null;
  @Column({nullable:true})
  @Field({nullable:true})
  email: string;
  @Column({nullable:true})
  @Field({nullable:true})
  otp: string;
  @Column({nullable:true})
  @Field({nullable:true})
  otp_veified: boolean;
  @Column({nullable:true})
  @Field({nullable:true})
  password: string;

  // ... Other fields ...
}


