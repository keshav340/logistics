
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

export interface EmailInput {
    email: string;
    otp: string;
}

export interface SelectUserTypeAndSubtypeInput {
    userType?: Nullable<UserType>;
    customerSubType?: Nullable<CustomerSubType>;
    vendorSubType?: Nullable<VendorSubType>;
    overseasAgentSubType?: Nullable<OverseasAgentSubType>;
}

export interface Password {
    password: string;
    confirmPassword: string;
}

export interface User {
    id: string;
    userType: UserType;
    customerSubType?: Nullable<CustomerSubType>;
    vendorSubType?: Nullable<VendorSubType>;
    overseasAgentSubType?: Nullable<OverseasAgentSubType>;
    email?: Nullable<string>;
    otp?: Nullable<string>;
    otp_veified?: Nullable<boolean>;
    password?: Nullable<string>;
}

export interface IQuery {
    hello(): string | Promise<string>;
    listInitialRegistrations(): User[] | Promise<User[]>;
    listAllOtps(): string[] | Promise<string[]>;
    getOtpByEmail(email: string): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    acceptEmail(emailInput: EmailInput): User | Promise<User>;
    sendOTP(email: string): string | Promise<string>;
    initialRegistration(userInput: SelectUserTypeAndSubtypeInput, emailInput: EmailInput): User | Promise<User>;
    savePassword(passwordInput: Password, userId: number): User | Promise<User>;
    login(email: string, password: string): string | Promise<string>;
}

type Nullable<T> = T | null;
