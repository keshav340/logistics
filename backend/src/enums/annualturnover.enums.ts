import { registerEnumType } from '@nestjs/graphql';

export enum AnnualTurnover {
    LessThan1Million = 'Less than $1 Million',
  OneTo5Million = '$1 Million to $5 Million',
  FiveTo10Million = '$5 Million to $10 Million',
  MoreThan10Million = 'More than $10 Million',
  
}

registerEnumType(AnnualTurnover, {
  name: 'AnnualTurnover',
  description: 'The annual turnover category',
});
