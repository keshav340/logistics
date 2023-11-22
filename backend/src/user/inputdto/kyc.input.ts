// kyc.input.ts
import { Field, InputType } from '@nestjs/graphql';
import { GraphQLScalarType, Kind } from 'graphql'
import { KeyValueScalar } from '../kyc.entity';
@InputType()
export class KycInput {
  @Field(() => KeyValueScalar, { nullable: true })
  certificate_of_registration?: Record<string, string>;

  @Field(() => KeyValueScalar, { nullable: true })
  company_pan_card?: Record<string, string>;

  @Field(() => KeyValueScalar, { nullable: true })
  aadhar_card?: Record<string, string>;

  @Field(() => KeyValueScalar, { nullable: true })
  pan_card?: Record<string, string>;

  @Field(() => KeyValueScalar, { nullable: true })
  iso_certificate?: Record<string, string>;

  @Field(() => KeyValueScalar, { nullable: true })
  aeo_certificate?: Record<string, string>;

  @Field(() => KeyValueScalar, { nullable: true })
  iata_certificate?: Record<string, string>;

  @Field(() => KeyValueScalar, { nullable: true })
  duns_certificate?: Record<string, string>;

  @Field(() => KeyValueScalar, { nullable: true })
  manufacturing_license?: Record<string, string>;

  @Field(() => KeyValueScalar, { nullable: true })
  warehouse_insurance?: Record<string, string>;

  @Field(() => KeyValueScalar, { nullable: true })
  any_other_trading_license?: Record<string, string>;
}
