import { InputType, Field } from '@nestjs/graphql';
import { UserType, CustomerSubType, VendorSubType, OverseasAgentSubType } from 'src/enums/user.enums';

@InputType()
export class SelectUserTypeAndSubtypeInput {
  @Field(() => UserType, { nullable: true })
  userType: UserType;

  @Field(() => CustomerSubType, { nullable: true })
  customerSubType?: CustomerSubType;

  @Field(() => VendorSubType, { nullable: true })
  vendorSubType?: VendorSubType;

  @Field(() => OverseasAgentSubType, { nullable: true })
  overseasAgentSubType?: OverseasAgentSubType;
}
