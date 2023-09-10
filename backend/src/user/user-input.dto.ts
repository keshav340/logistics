import { InputType, Field } from '@nestjs/graphql';
import { UserType, SubUserType, } from 'src/enums/user.enums';
import { CompanyType } from 'src/enums/company.enums';
import { IndustryType } from 'src/enums/industry.enums';
import { AnnualTurnover } from 'src/enums/annualturnover.enums';
@InputType()
export class CommonUserInput {
  @Field(() => UserType)
  userType: UserType;

  @Field(() => [SubUserType], { nullable: true })
  subTypes?: SubUserType[];

  @Field(() => CompanyType)
  companyType: CompanyType;

  @Field(() => IndustryType)
  industryType: IndustryType;

  @Field()
  CompanyName: string;

  @Field()
  Address: string;

  @Field()
  State: string;

  @Field()
  City: string;

  @Field()
  Country: string;

  @Field(() => AnnualTurnover)
  annualTurnover: AnnualTurnover;

  @Field()
  FirstName: string;

  @Field()
  LastName: string;

  @Field()
  Designation: string;

  @Field()
  Mobile_no: string;

  @Field()
  Email_id: string;

  @Field()
  Website_Adress: string;
}
