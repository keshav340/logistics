import { UserType, CustomerSubType, VendorSubType, OverseasAgentSubType } from 'src/enums/user.enums';
export declare class SelectUserTypeAndSubtypeInput {
    userType: UserType;
    customerSubType?: CustomerSubType;
    vendorSubType?: VendorSubType;
    overseasAgentSubType?: OverseasAgentSubType;
}
