import { Entity, Column, PrimaryGeneratedColumn,OneToMany,Unique,OneToOne,JoinColumn} from 'typeorm';
import { ObjectType, Field, Int,ID } from '@nestjs/graphql'; // Import the necessary decorators
import { CustomerSubType, UserType, VendorSubType, OverseasAgentSubType } from 'src/enums/user.enums';
import { CompanyType } from 'src/enums/company.enums';
import { IndustryType } from 'src/enums/industry.enums';
import { AnnualTurnover } from 'src/enums/annualturnover.enums';
import { ApprovedUser } from 'src/enums/approved.enums';
import { WareHouse } from 'src/warehouse/warehouse.entity';
import { TruckEntity } from 'src/truck/truck.entity';
import { CompanyContact } from './company.entity';
import { CorporateAddress } from './corporate.entity';
import { Kyc } from './kyc.entity';
import { Booking } from 'src/booking/booking.entity';
@Entity()

@ObjectType() // Decorate your class with @ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
  @Column({nullable:true})
  @Field({nullable:true})
  BillingCode: string;

  @Column({ type: 'enum', enum: UserType,nullable: true })
  @Field(() => UserType,{nullable: true})
  userType: UserType | null;

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
@Column({type:'enum',enum:CompanyType,nullable:true})
@Field(()=>CompanyType,{nullable:true})
companyType:CompanyType | null;
@Column({type:'enum',enum:IndustryType,nullable:true})
@Field(()=>IndustryType,{nullable:true})
industryType:IndustryType | null;
@Column({nullable:true})
@Field({nullable:true})
companyName: string;
@Column({nullable:true})
@Field({nullable:true})
state: string;
@Column({nullable:true})
@Field({nullable:true})
pincode: string;
@Column({nullable:true})
@Field({nullable:true})
Adress: string;
@Column({nullable:true})
@Field({nullable:true})
city: string;
@Column({nullable:true})
@Field({nullable:true})
country: string;
@Column({nullable:true})
@Field({nullable:true})
company_reg_no: string;
@Column({nullable:true})
@Field({nullable:true})
company_pan_no: string;
@Column({nullable:true})
@Field({nullable:true})
first_name: string;
@Column({nullable:true})
@Field({nullable:true})
last_name: string;
@Column({nullable:true})
@Field({nullable:true})
Designation: string;
@Column({nullable:true})
@Field({nullable:true})
mobile: string;
@Column({nullable:true})
@Field({nullable:true})
website: string;
@Column({type:'enum',enum:AnnualTurnover,nullable:true})
@Field(()=>AnnualTurnover,{nullable:true})
annualTurnover:AnnualTurnover | null;
@Column({nullable:true})
@Field({nullable:true})
gst_no: string;
@Column({type:'enum',enum:ApprovedUser,nullable:true})
@Field(()=>ApprovedUser,{nullable:true})
isapproved: ApprovedUser | null;
@Column({nullable:true})
@Field({nullable:true})
createdAt: Date;
@Column({nullable:true})
@Field({nullable:true})
updatedAt: Date;
@Column({nullable:true})
@Field({nullable:true})
finalregapproved: boolean;
@Column({type:'text',nullable:true})
@Field({nullable:true})
remarks: string
  @OneToMany(() => WareHouse, (warehouse) => warehouse.user)
  @Field(() => [WareHouse], { nullable: true })
  warehouses: WareHouse[];
  @OneToMany(() => TruckEntity, (truck) => truck.user)
  @Field(() => [TruckEntity], { nullable: true })
  trucks: TruckEntity[];

@Field({nullable:true})
@Column({nullable:true})
reveiw_token: string;
@Field({nullable:true})
@Column({nullable:true})
JWT_token: string;
@Column({nullable:true})
@Field({nullable:true})
reset_token: string;
@Column({nullable:true})
@Field({nullable:true})
email_token : string;
@Column({nullable:true})
@Field({nullable:true})
email_verify: boolean;
@Column({nullable:true})
@Field({nullable:true})
reset_password_verification:Date;
 @OneToOne(() => CompanyContact, { cascade: true, eager: true }) 
  @JoinColumn()
   @Field(() => CompanyContact, { nullable: true })
  companyContact: CompanyContact;
  @OneToOne(() => CorporateAddress, { cascade: true, eager: true }) 
   @JoinColumn()
  @Field(() => CorporateAddress, { nullable: true })
   corporateAddress: CorporateAddress;

  @OneToOne(() => Kyc, { cascade: true, eager: true }) // Define the one-to-one relationship with Kyc
  @JoinColumn()
  @Field(() => Kyc, { nullable: true })
   kyc: Kyc;
   @OneToMany(() => Booking, (booking) => booking.user)
   @Field(() => [Booking], { nullable: true })
   bookings: Booking[];



}


