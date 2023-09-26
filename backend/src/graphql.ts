
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum UserType {
    CUSTOMER = "CUSTOMER",
    VENDOR = "VENDOR",
    OVERSEAS_AGENT = "OVERSEAS_AGENT"
}

export enum CustomerSubType {
    MANUFACTURER = "MANUFACTURER",
    MERCHANT_TRADER = "MERCHANT_TRADER",
    MANUFACTURER_EXPORTER = "MANUFACTURER_EXPORTER",
    MERCHANT_EXPORTER = "MERCHANT_EXPORTER"
}

export enum VendorSubType {
    WAREHOUSE_COMPANY = "WAREHOUSE_COMPANY",
    COLD_STORAGE_COMPANY = "COLD_STORAGE_COMPANY"
}

export enum OverseasAgentSubType {
    FOREIGN_AGENT = "FOREIGN_AGENT"
}

export enum CompanyType {
    Partnership = "Partnership",
    private_limited = "private_limited",
    public_limited = "public_limited",
    limited_liability_partnership = "limited_liability_partnership",
    Non_profit_cooperation = "Non_profit_cooperation",
    Inc = "Inc",
    Cooperation = "Cooperation",
    LLC = "LLC"
}

export enum IndustryType {
    Apparels_and_garments = "Apparels_and_garments",
    Building_and_Construction = "Building_and_Construction",
    Electronic_and_Electical = "Electronic_and_Electical",
    Drugs_and_pharms = "Drugs_and_pharms",
    Industrial_Machines = "Industrial_Machines",
    Industrial_suppplies = "Industrial_suppplies",
    Food_and_Beverages = "Food_and_Beverages",
    Hospital_and_Medicalsupplies = "Hospital_and_Medicalsupplies"
}

export enum AnnualTurnover {
    UP_TO_10000 = "UP_TO_10000",
    FROM_10000_TO_50000 = "FROM_10000_TO_50000",
    FROM_50000_TO_100000 = "FROM_50000_TO_100000",
    FROM_100000_TO_500000 = "FROM_100000_TO_500000",
    FROM_500000_TO_1000000 = "FROM_500000_TO_1000000",
    FROM_1000000_TO_1500000 = "FROM_1000000_TO_1500000",
    FROM_1500000_TO_2500000 = "FROM_1500000_TO_2500000",
    FROM_2500000_TO_5000000 = "FROM_2500000_TO_5000000",
    FROM_5000000_TO_10000000 = "FROM_5000000_TO_10000000",
    ABOVE_10000000 = "ABOVE_10000000"
}

export class EmailInput {
    email: string;
    otp: string;
}

export class SelectUserTypeAndSubtypeInput {
    userType?: Nullable<UserType>;
    customerSubType?: Nullable<CustomerSubType>;
    vendorSubType?: Nullable<VendorSubType>;
    overseasAgentSubType?: Nullable<OverseasAgentSubType>;
}

export class Password {
    password: string;
    confirmPassword: string;
}

export class Finalreg {
    companyType?: Nullable<CompanyType>;
    industryType?: Nullable<IndustryType>;
    state?: Nullable<string>;
    city?: Nullable<string>;
    country?: Nullable<string>;
    company_reg_no?: Nullable<string>;
    annualTurnover?: Nullable<AnnualTurnover>;
    gst_no?: Nullable<string>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    Designation?: Nullable<string>;
    mobile?: Nullable<string>;
    website?: Nullable<string>;
}

export class UpdateUsertype {
    userType?: Nullable<UserType>;
}

export class UpdateapprovedUsertype {
    userType?: Nullable<UserType>;
    companyType?: Nullable<CompanyType>;
    industryType?: Nullable<IndustryType>;
    state?: Nullable<string>;
    city?: Nullable<string>;
    country?: Nullable<string>;
    company_reg_no?: Nullable<string>;
    annualTurnover?: Nullable<AnnualTurnover>;
    gst_no?: Nullable<string>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    Designation?: Nullable<string>;
    mobile?: Nullable<string>;
    website?: Nullable<string>;
}

export class User {
    id: string;
    BillingCode?: Nullable<string>;
    userType?: Nullable<UserType>;
    customerSubType?: Nullable<CustomerSubType>;
    vendorSubType?: Nullable<VendorSubType>;
    overseasAgentSubType?: Nullable<OverseasAgentSubType>;
    email?: Nullable<string>;
    otp?: Nullable<string>;
    otp_veified?: Nullable<boolean>;
    password?: Nullable<string>;
    companyType?: Nullable<CompanyType>;
    industryType?: Nullable<IndustryType>;
    companyName?: Nullable<string>;
    state?: Nullable<string>;
    pincode?: Nullable<string>;
    Adress?: Nullable<string>;
    city?: Nullable<string>;
    country?: Nullable<string>;
    company_reg_no?: Nullable<string>;
    company_pan_no?: Nullable<string>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    Designation?: Nullable<string>;
    mobile?: Nullable<string>;
    website?: Nullable<string>;
    annualTurnover?: Nullable<AnnualTurnover>;
    gst_no?: Nullable<string>;
    isapproved?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    finalregapproved?: Nullable<boolean>;
}

export abstract class IQuery {
    abstract hello(): string | Promise<string>;

    abstract listInitialRegistrations(): User[] | Promise<User[]>;

    abstract waitingforapproval(): User[] | Promise<User[]>;

    abstract listAllOtps(): string[] | Promise<string[]>;

    abstract getOtpByEmail(email: string): Nullable<string> | Promise<Nullable<string>>;

    abstract listNonApprovedUsers(userType: string): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract acceptEmail(emailInput: EmailInput): User | Promise<User>;

    abstract sendOTP(email: string): string | Promise<string>;

    abstract initialRegistration(userInput: SelectUserTypeAndSubtypeInput, emailInput: EmailInput): User | Promise<User>;

    abstract savePassword(passwordInput: Password, userId: number): User | Promise<User>;

    abstract login(email: string, password: string): string | Promise<string>;

    abstract finalreg(input: Finalreg, userId: number, userInput: UpdateUsertype): User | Promise<User>;

    abstract approveUser(userId: number, input: UpdateapprovedUsertype): User | Promise<User>;
}

export type DateTime = any;
type Nullable<T> = T | null;
