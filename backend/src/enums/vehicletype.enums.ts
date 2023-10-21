import { registerEnumType } from '@nestjs/graphql';

export enum vehicleType{
  TataAce = "TataAce",
  AshokLeylandDost = "AshokLeylandDost",
  MahindraBoleropickup = "MahindraBoleropickup",
  Tata407 = "Tata407",


}

registerEnumType(vehicleType, {
  name: 'vehicleType',
  description: 'The type of vehicle to display',
});