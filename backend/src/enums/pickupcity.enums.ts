import { registerEnumType } from '@nestjs/graphql';

export enum pickupCity{
  Assam = 'Assam',
  Bihar = 'Bihar',
  Gujarat = 'Gujarat',
  Rajesthan = 'Rajesthan',
  Haryana = 'Haryana',
  Kerala = 'Kerala',
  Karnatka = 'Karnatka',
  



}

registerEnumType(pickupCity, {
  name: 'pickupCity',
  description: 'pickupCity to display',
});