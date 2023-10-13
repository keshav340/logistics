import { InputType, Field } from "@nestjs/graphql";
import { UserType } from "src/enums/user.enums";
import { CompanyType } from "src/enums/company.enums";
import { IndustryType } from "src/enums/industry.enums";
import { AnnualTurnover } from "src/enums/annualturnover.enums";
import {  CustomerSubType, VendorSubType, OverseasAgentSubType } from 'src/enums/user.enums';
import { ApprovedUser } from "src/enums/approved.enums";
@InputType()
export class Adminreject { // Use the correct casing here (UpdateUsertype)
    
  
  @Field({ nullable: true })
  remarks: string;
  
 


 

}
