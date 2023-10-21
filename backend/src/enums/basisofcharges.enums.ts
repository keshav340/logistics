import { registerEnumType } from '@nestjs/graphql';

export enum basisofCharges {
    PerKgs = "PerKgs",
    PerVehicles = "PerVehicles",
 
}

registerEnumType(basisofCharges, {
  name: 'basisofCharges',
  description: ' basis of charges to display',
});
