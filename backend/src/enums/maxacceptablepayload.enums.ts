import { registerEnumType } from '@nestjs/graphql';

export enum maxacceptablePayload{
  Max_load_850_kgs = 'Max_load_850_kgs',
  Max_load_1_Tonne = 'Max_load_1_Tonne',
  Max_load_onehalf_Tonne= 'Max_load_1.5_Tonne',



}

registerEnumType(maxacceptablePayload, {
  name: 'maxacceptablePayload',
  description: 'TMax acceptable payload to display',
});