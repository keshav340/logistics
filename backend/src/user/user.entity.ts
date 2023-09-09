import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserType } from 'src/enums/user.enums';
import { CompanyType } from 'src/enums/company.enums';
import { IndustryType } from 'src/enums/industry.enums';
import { AnnualTurnover } from 'src/enums/annualturnover.enums';
import { MajorTradeLine } from 'src/enums/majortradelines.enums';
@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  billingCodeofCompany: string;

  @Column({ type: 'enum', enum: UserType })
  @Field(() => UserType)
  userType: UserType;

  @Column({ type: 'json', nullable: true })
  @Field(() => [String], { nullable: true })
  subTypes: string[];

  @BeforeInsert()
  generateBillingCode() {
    this.billingCodeofCompany = generateBillingCode();
  }
  @Column({ type: 'enum', enum: CompanyType })
  @Field(() => CompanyType)
  companyType: CompanyType;
  @Column({type:'enum',enum:IndustryType})
  @Field(() => IndustryType)
  industryType:IndustryType;
  @Column()
  @Field()
  CompanyName:string;
  @Column()
  @Field()
  Address:string;
  @Column()
  @Field()
  State:string;
  @Column()
  @Field()
  City:string;
  @Column()
  @Field()
  Country:string;
  @Column()
  @Field()
  Company_Registration_Number:string;
  @Column()
  @Field()
  company_pan_no:string;
  @Column({type:'enum',enum:AnnualTurnover})
  @Field(() => AnnualTurnover)
  annualTurnover:AnnualTurnover;
  @Column()
  @Field()
  GST_no:string;
  @Column()
  @Field()
  FirstName:string;
  @Column()
  @Field()
  LastName:string;
  @Column()
  @Field()
  Designation:string;
  @Column()
  @Field()
  Mobile_no:string;
  @Column()
  @Field()
  Email_id:string;
  @Column()
  @Field()
  Website_Adress:string;
  @Field(() => [MajorTradeLine], { nullable: true })
  @Column('text', { array: true, default: null, nullable: true })
  majorTradeLines: MajorTradeLine[];
  @Field()
  @Column()
  Business_License_no : string;
  @Field( )
  @Column()
  Company_tax_id_no : string;
  @Field()
  @Column()
  zip_code : string;
}

function generateBillingCode() {
 
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const codeLength = 10;
  let result = '';
  for (let i = 0; i < codeLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
