import { registerEnumType } from '@nestjs/graphql';

export enum dropCity{
  Assam = 'Assam',
  Bihar = 'Bihar',
  Gujarat = 'Gujarat',
  Rajesthan = 'Rajesthan',
  Haryana = 'Haryana',
  Kerala = 'Kerala',
  Karnatka = 'Karnatka',
  



}

registerEnumType(dropCity, {
  name: 'dropCity',
  description: 'dropCity to display',
});