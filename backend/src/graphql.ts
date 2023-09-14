
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

export enum MajorTradeLine {
    Afghanisthan = "Afghanisthan",
    Albania = "Albania",
    Algeria = "Algeria",
    Andoora = "Andoora",
    Angola = "Angola",
    Antigua_and_Barbuda = "Antigua_and_Barbuda",
    Argentina = "Argentina",
    Armenia = "Armenia",
    Australia = "Australia",
    Austria = "Austria",
    Azzerbaijan = "Azzerbaijan",
    Bahamas = "Bahamas",
    Bahrain = "Bahrain",
    Bangladesh = "Bangladesh",
    Barbados = "Barbados",
    Belarus = "Belarus",
    Belgium = "Belgium",
    Belize = "Belize",
    Benin = "Benin",
    Bhutan = "Bhutan",
    Bolivia = "Bolivia",
    Bosnia_and_Herzegovina = "Bosnia_and_Herzegovina",
    Botswana = "Botswana",
    Brazil = "Brazil",
    Brunei = "Brunei",
    Bulgaria = "Bulgaria",
    Burkina_Faso = "Burkina_Faso",
    Burundi = "Burundi",
    India = "India"
}

export interface WarehouseInput {
    address: string;
    state: string;
    city: string;
    pinCode: string;
    country: string;
}

export interface CommonUserInput {
    userType: UserType;
    companyType: CompanyType;
    industryType: IndustryType;
    CompanyName: string;
    Address: string;
    State: string;
    City: string;
    Country: string;
    annualTurnover: AnnualTurnover;
    FirstName: string;
    LastName: string;
    Designation: string;
    Mobile_no: string;
    Email_id: string;
    Website_Adress: string;
    customerData?: Nullable<CustomerInput>;
    vendorData?: Nullable<VendorInput>;
    agentData?: Nullable<OverseasAgentInput>;
}

export interface CustomerInput {
    company_registration_no: string;
    company_pan_no: string;
    gst_no: string;
}

export interface VendorInput {
    company_registration_no: string;
    company_pan_no: string;
    gst_no: string;
}

export interface OverseasAgentInput {
    zip_code: string;
    Business_License_no: string;
    Company_tax_id_no: string;
}

export interface User {
    billingCodeofCompany: string;
    userType: UserType;
    subTypes?: Nullable<string[]>;
    companyType: CompanyType;
    industryType: IndustryType;
    CompanyName: string;
    Address: string;
    State: string;
    City: string;
    Country: string;
    Company_Registration_Number: string;
    company_pan_no: string;
    annualTurnover: AnnualTurnover;
    GST_no: string;
    FirstName: string;
    LastName: string;
    Designation: string;
    Mobile_no: string;
    Email_id: string;
    Website_Adress: string;
    majorTradeLines?: Nullable<MajorTradeLine[]>;
    Business_License_no: string;
    Company_tax_id_no: string;
    zip_code: string;
    created_at: DateTime;
    created_by: string;
}

export interface Warehouse {
    id: string;
    address: string;
    state: string;
    city: string;
    pinCode: string;
    country: string;
}

export interface IQuery {
    hello(): string | Promise<string>;
    getWarehouses(): Warehouse[] | Promise<Warehouse[]>;
    getWarehouse(id: string): Warehouse | Promise<Warehouse>;
}

export interface IMutation {
    createWarehouse(input: WarehouseInput): Warehouse | Promise<Warehouse>;
    updateWarehouse(id: string, input: WarehouseInput): Warehouse | Promise<Warehouse>;
    deleteWarehouse(id: string): Warehouse | Promise<Warehouse>;
    registerCustomer(input: CommonUserInput): User | Promise<User>;
    registerVendor(input: CommonUserInput): User | Promise<User>;
    registerAgent(input: CommonUserInput): User | Promise<User>;
}

export type DateTime = any;
type Nullable<T> = T | null;
