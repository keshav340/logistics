import { registerEnumType } from '@nestjs/graphql';

export enum CompanyType {
   Partnership  = 'Partnership',
   private_limited  = 'Private Limited',
   public_limited  = 'Public Limited',
   limited_liability_partnership  = 'Limited Liability Partnership',
   Non_profit_cooperation = 'Non Profit Cooperation',
   Inc = 'Inc',
   Cooperation = 'Cooperation',
   LLC = 'LLC'

}

registerEnumType(CompanyType, {
  name: 'CompanyType',
  description: 'The type of company',
});
