import { registerEnumType } from '@nestjs/graphql';

export enum temperatureType{
   Active = "Active",
   Passive = "Passive",


}

registerEnumType(temperatureType, {
  name: 'temperatureType',
  description: 'The type oftemperature to display',
});