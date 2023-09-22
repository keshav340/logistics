import { CustomerSubType, UserType, VendorSubType, OverseasAgentSubType } from 'src/enums/user.enums';
export declare class User {
    id: number;
    userType: UserType;
    customerSubType: CustomerSubType | null;
    vendorSubType: VendorSubType | null;
    overseasAgentSubType: OverseasAgentSubType | null;
    email: string;
    otp: string;
    otp_veified: boolean;
    password: string;
}
