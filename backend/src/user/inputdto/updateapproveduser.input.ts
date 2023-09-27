import { InputType, Field } from "@nestjs/graphql";
import { UserType } from "src/enums/user.enums";
import { CompanyType } from "src/enums/company.enums";
import { IndustryType } from "src/enums/industry.enums";
import { AnnualTurnover } from "src/enums/annualturnover.enums";

@InputType()
export class UpdateapprovedUsertype { // Use the correct casing here (UpdateUsertype)
  
  @Field(() => CompanyType, { nullable: true })
  companyType: CompanyType | null;
  
  @Field(() => IndustryType, { nullable: true })
  industryType: IndustryType | null;
  
  @Field({ nullable: true })
  state: string;
  
  @Field({ nullable: true })
  city: string;
  
  @Field({ nullable: true })
  country: string;
  
  @Field({ nullable: true })
  company_reg_no: string;
  
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
