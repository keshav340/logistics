import { registerEnumType } from '@nestjs/graphql';

export enum IndustryType {
   Apparels_and_garments = 'Apparels and Garments',
   Building_and_Construction = 'Building and Construction',
   Electronic_and_Electical = 'Electronic and Electical',
   Drugs_and_pharms = 'Drugs and pharms',
   Industrial_Machines = 'Industrial Machines',
   Industrial_suppplies = 'Industrial supplies',
   Food_and_Beverages = 'Food and Beverages',
   Hospital_and_Medicalsupplies = 'Hospital and Medical supplies',

}

registerEnumType(IndustryType, {
  name: 'IndustryType',
  description: 'The type of industry',
});
