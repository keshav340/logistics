import { registerEnumType } from '@nestjs/graphql';

export enum temperatureCapacity {
    MINUS_Eighteen_Degree_to_twenty_degree_celcius = "-18 to 20 degrees Celsius",
    MINUS_Two_Degree_to_MINUS_Eight_degree_celcius = "-2 to -8 degrees Celsius",
    MINUS_Twenty_Degree_to_twenty_degree_celcius = "-20 to 20 degrees Celsius",
   fifteen_Degree_to_twentyfive_degree_celcius = "15 to 25 degrees Celsius",
    
    
    



}

registerEnumType(temperatureCapacity, {
  name: 'temperatureCapacity',
  description: 'Value of the temperature capacity',
});