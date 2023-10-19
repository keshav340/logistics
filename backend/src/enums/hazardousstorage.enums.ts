import { registerEnumType } from '@nestjs/graphql';

export enum hazardousStorageType {
   Class1 = "Class1",
   Class2 = "Class2",
   Class3 = "Class3",
   Class4 = "Class4",
   Class5 = "Class5",
   Class6 = "Class6",
   Class7 = "Class7",
   class8 = "Class8",


}

registerEnumType(hazardousStorageType, {
  name: 'hazardousStorageType',
  description: 'The type of hazardous Storage',
});
