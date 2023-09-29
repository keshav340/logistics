// finalreg.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { AnnualTurnover } from 'src/enums/annualturnover.enums';
import { CompanyType } from 'src/enums/company.enums';
import { IndustryType } from 'src/enums/industry.enums';

@InputType()
export class Finalreg { 
  @Field(() => CompanyType, { nullable: true })
  companyType: CompanyType | null;
  
  @Field(() => IndustryType, { nullable: true })
  industryType: IndustryType | null;
  @Field({ nullable: true })
  companyName: string;

  
  @Field({ nullable: true })
  state: string;
  
  @Field({ nullable: true })
  city: string;
  
  @Field({ nullable: true })
  country: string;
  @Field({ nullable: true })
  pincode: string;
  @Field({ nullable: true } )
  Address: string;

  
  @Field({ nullable: true })
  company_reg_no: string;
  @Field({ nullable: true })
  company_pan_no: string;
  
  @Field(() => AnnualTurnover, { nullable: true })
  annualTurnover: AnnualTurnover | null;
  
  @Field({ nullable: true })
  gst_no: string;
  
  @Field({ nullable: true })
  first_name: string;
  
  @Field({ nullable: true })
  last_name: string;
  
  @Field({ nullable: true })
  Designation: string;
  
  @Field({ nullable: true })
  mobile: string;
  
  @Field({ nullable: true })
  website: string;
}
