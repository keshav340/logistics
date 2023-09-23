// annual-turnover.enum.ts

import { registerEnumType } from '@nestjs/graphql';

export enum AnnualTurnover {
  UP_TO_10000 = '$1 - $10,000',
  FROM_10000_TO_50000 = '$10,000 - $50,000',
  FROM_50000_TO_100000 = '$50,000 - $100,000',
  FROM_100000_TO_500000 = '$100,000 - $500,000',
  FROM_500000_TO_1000000 = '$500,000 - $1,000,000',
  FROM_1000000_TO_1500000 = '$1,000,000 - $1,500,000',
  FROM_1500000_TO_2500000 = '$1,500,000 - $2,500,000',
  FROM_2500000_TO_5000000 = '$2,500,000 - $5,000,000',
  FROM_5000000_TO_10000000 = '$5,000,000 - $10,000,000',
  ABOVE_10000000 = 'Above $10,000,000',
}

registerEnumType(AnnualTurnover, {
  name: 'AnnualTurnover',
  description: 'Annual Turnover Ranges',
});
