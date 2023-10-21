import { registerEnumType } from '@nestjs/graphql';

export enum transporterType{
   FTL = "FTL",
   LTL = "LTL",

}

registerEnumType(transporterType, {
  name: 'transportType',
  description: 'The type of transport to display',
});