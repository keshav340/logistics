import { registerEnumType } from '@nestjs/graphql';

export enum DropCityPincode {
  _515004 = "515004",
  _515731 = "515731",
  _515002 = "515002",
  _515766 = "515766",
  _515415 = "515415",
  _515822 = "515822",
  _515455 = "515455",
  _515001 = "515001",
}

registerEnumType(DropCityPincode, {
  name: 'DropCityPincode',
  description: 'dropCity Pincode to display',
});
