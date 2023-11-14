
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum warehouseType {
    coldStorageFacility = "coldStorageFacility",
    generalWarehouse = "generalWarehouse",
    referigeratedWarehouse = "referigeratedWarehouse",
    fullFilmentCenter = "fullFilmentCenter",
    petroleumWarehouse = "petroleumWarehouse",
    bondedWarehouse = "bondedWarehouse",
    hazCargoWarehouse = "hazCargoWarehouse"
}

export enum hazardousStorageType {
    Class1 = "Class1",
    Class2 = "Class2",
    Class3 = "Class3",
    Class4 = "Class4",
    Class5 = "Class5",
    Class6 = "Class6",
    Class7 = "Class7",
    class8 = "class8"
}

export enum temperatureType {
    Active = "Active",
    Passive = "Passive"
}

export enum temperatureCapacity {
    MINUS_Eighteen_Degree_to_twenty_degree_celcius = "MINUS_Eighteen_Degree_to_twenty_degree_celcius",
    MINUS_Two_Degree_to_MINUS_Eight_degree_celcius = "MINUS_Two_Degree_to_MINUS_Eight_degree_celcius",
    MINUS_Twenty_Degree_to_twenty_degree_celcius = "MINUS_Twenty_Degree_to_twenty_degree_celcius",
    fifteen_Degree_to_twentyfive_degree_celcius = "fifteen_Degree_to_twentyfive_degree_celcius"
}

export enum transportType {
    FTL = "FTL",
    LTL = "LTL"
}

export enum vehicleType {
    TataAce = "TataAce",
    AshokLeylandDost = "AshokLeylandDost",
    MahindraBoleropickup = "MahindraBoleropickup",
    Tata407 = "Tata407"
}

export enum maxacceptablePayload {
    Max_load_850_kgs = "Max_load_850_kgs",
    Max_load_1_Tonne = "Max_load_1_Tonne",
    Max_load_onehalf_Tonne = "Max_load_onehalf_Tonne"
}

export enum pickupCity {
    Assam = "Assam",
    Bihar = "Bihar",
    Gujarat = "Gujarat",
    Rajesthan = "Rajesthan",
    Haryana = "Haryana",
    Kerala = "Kerala",
    Karnatka = "Karnatka"
}

export enum pickupCityPincode {
    _515004 = "_515004",
    _515731 = "_515731",
    _515002 = "_515002",
    _515766 = "_515766",
    _515415 = "_515415",
    _515822 = "_515822",
    _515455 = "_515455",
    _515001 = "_515001"
}

export enum dropCity {
    Assam = "Assam",
    Bihar = "Bihar",
    Gujarat = "Gujarat",
    Rajesthan = "Rajesthan",
    Haryana = "Haryana",
    Kerala = "Kerala",
    Karnatka = "Karnatka"
}

export enum DropCityPincode {
    _515004 = "_515004",
    _515731 = "_515731",
    _515002 = "_515002",
    _515766 = "_515766",
    _515415 = "_515415",
    _515822 = "_515822",
    _515455 = "_515455",
    _515001 = "_515001"
}

export enum UserType {
    CUSTOMER = "CUSTOMER",
    VENDOR = "VENDOR",
    OVERSEAS_AGENT = "OVERSEAS_AGENT",
    Admin = "Admin"
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

export enum Approved_users {
    Approval_pending = "Approval_pending",
    Approved = "Approved",
    Rejected = "Rejected",
    REVEIW_PENDING = "REVEIW_PENDING",
    Reverted_user = "Reverted_user"
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

export interface Admin {
    userType?: Nullable<UserType>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    Designation?: Nullable<string>;
    mobile?: Nullable<string>;
    website?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    confirmpassword?: Nullable<string>;
}

export interface Finalreg {
    companyType?: Nullable<CompanyType>;
    industryType?: Nullable<IndustryType>;
    companyName?: Nullable<string>;
    state?: Nullable<string>;
    city?: Nullable<string>;
    country?: Nullable<string>;
    pincode?: Nullable<string>;
    Address?: Nullable<string>;
    company_reg_no?: Nullable<string>;
    company_pan_no?: Nullable<string>;
    annualTurnover?: Nullable<AnnualTurnover>;
    gst_no?: Nullable<string>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    Designation?: Nullable<string>;
    mobile?: Nullable<string>;
    website?: Nullable<string>;
}

export interface UpdateUsertype {
    userType?: Nullable<UserType>;
}

export interface Updateapproved {
    companyType?: Nullable<CompanyType>;
    Approveduser?: Nullable<Approved_users>;
    industryType?: Nullable<IndustryType>;
    state?: Nullable<string>;
    pincode?: Nullable<string>;
    Address?: Nullable<string>;
    city?: Nullable<string>;
    country?: Nullable<string>;
    company_reg_no?: Nullable<string>;
    company_name?: Nullable<string>;
    company_pan_no?: Nullable<string>;
    annualTurnover?: Nullable<AnnualTurnover>;
    gst_no?: Nullable<string>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    Designation?: Nullable<string>;
    mobile?: Nullable<string>;
    website?: Nullable<string>;
    email?: Nullable<string>;
    userType?: Nullable<UserType>;
    customerSubType?: Nullable<CustomerSubType>;
    vendorSubType?: Nullable<VendorSubType>;
    overseasAgentSubType?: Nullable<OverseasAgentSubType>;
    remarks?: Nullable<string>;
}

export interface SendFormTorejectedUser {
    companyType?: Nullable<CompanyType>;
    industryType?: Nullable<IndustryType>;
    state?: Nullable<string>;
    pincode?: Nullable<string>;
    Address?: Nullable<string>;
    city?: Nullable<string>;
    country?: Nullable<string>;
    company_reg_no?: Nullable<string>;
    company_name?: Nullable<string>;
    company_pan_no?: Nullable<string>;
    annualTurnover?: Nullable<AnnualTurnover>;
    gst_no?: Nullable<string>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    Designation?: Nullable<string>;
    mobile?: Nullable<string>;
    website?: Nullable<string>;
    email?: Nullable<string>;
    userType?: Nullable<UserType>;
    customerSubType?: Nullable<CustomerSubType>;
    vendorSubType?: Nullable<VendorSubType>;
    overseasAgentSubType?: Nullable<OverseasAgentSubType>;
}

export interface Adminreject {
    remarks?: Nullable<string>;
}

export interface LoginUserInput {
    email: string;
    password: string;
}

export interface ResetPasswordInput {
    password: string;
    confirmPassword: string;
}

export interface WarehouseInput {
    companyName?: Nullable<string>;
    Adress?: Nullable<string>;
    State?: Nullable<string>;
    City?: Nullable<string>;
    Pincode?: Nullable<string>;
    Country?: Nullable<string>;
    warehouseType?: Nullable<warehouseType>;
    totalSquareArea?: Nullable<string>;
    totalAvailiableArea?: Nullable<string>;
    occupiedSpace?: Nullable<string>;
    unoccupiedSpace?: Nullable<string>;
    rackedSpace?: Nullable<string>;
    minimumStorageRent?: Nullable<number>;
    minimumStorageCharges_per_pallet?: Nullable<number>;
    minimumStorageArea?: Nullable<string>;
    minimumstorageArea_per_pallet?: Nullable<string>;
    storageCharges?: Nullable<number>;
    storageCharges_per_pallet?: Nullable<number>;
    hazardousStorageType?: Nullable<hazardousStorageType>;
    temperatureType?: Nullable<temperatureType>;
    temperatureCapacity?: Nullable<temperatureCapacity>;
    userId: number;
}

export interface TruckDTO {
    companyName?: Nullable<string>;
    Adress?: Nullable<string>;
    State?: Nullable<string>;
    City?: Nullable<string>;
    Pincode?: Nullable<string>;
    Country?: Nullable<string>;
    transportertype?: Nullable<transportType>;
    vehicletype?: Nullable<vehicleType>;
    maxacceptablepayload?: Nullable<maxacceptablePayload>;
    pickupcity?: Nullable<pickupCity>;
    pickupcitypincode?: Nullable<pickupCityPincode>;
    dropcity?: Nullable<dropCity>;
    dropcitypincode?: Nullable<DropCityPincode>;
    transportcharges?: Nullable<number>;
    userId?: Nullable<number>;
}

export interface CorporateAddressDto {
    address?: Nullable<string>;
    state?: Nullable<string>;
    city?: Nullable<string>;
    pincode?: Nullable<string>;
    country?: Nullable<string>;
}

export interface CompanyContactDto {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    designation?: Nullable<string>;
    mobileNo?: Nullable<string>;
    emailId?: Nullable<string>;
}

export interface WareHouse {
    id: string;
    companyName: string;
    Adress: string;
    State?: Nullable<string>;
    City?: Nullable<string>;
    Pincode?: Nullable<string>;
    Country?: Nullable<string>;
    warehouseType?: Nullable<warehouseType>;
    totalSquareArea?: Nullable<string>;
    totalAvailiableArea?: Nullable<string>;
    occupiedSpace?: Nullable<string>;
    unoccupiedSpace?: Nullable<string>;
    rackedSpace?: Nullable<string>;
    user?: Nullable<User>;
    minimumStorageRent?: Nullable<number>;
    minimumStorageCharges_per_pallet?: Nullable<number>;
    minimumStorageArea?: Nullable<string>;
    minimumstorageArea_per_pallet?: Nullable<string>;
    storageCharges?: Nullable<number>;
    storageCharges_per_pallet?: Nullable<number>;
    hazardousStorageType?: Nullable<hazardousStorageType>;
    temperatureType?: Nullable<temperatureType>;
    temperatureCapacity?: Nullable<temperatureCapacity>;
}

export interface TruckEntity {
    id: string;
    companyName: string;
    Adress: string;
    State?: Nullable<string>;
    City?: Nullable<string>;
    Pincode?: Nullable<string>;
    Country?: Nullable<string>;
    transportertype?: Nullable<transportType>;
    vehicletype?: Nullable<vehicleType>;
    maxacceptablepayload?: Nullable<maxacceptablePayload>;
    pickupcity?: Nullable<pickupCity>;
    pickupcitypincode?: Nullable<pickupCityPincode>;
    dropcity?: Nullable<dropCity>;
    dropcitypincode?: Nullable<DropCityPincode>;
    transportcharges?: Nullable<number>;
    user?: Nullable<User>;
}

export interface CompanyContact {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    designation?: Nullable<string>;
    mobileNo?: Nullable<string>;
    emailId?: Nullable<string>;
    user?: Nullable<User>;
}

export interface CorporateAddress {
    id: string;
    address?: Nullable<string>;
    state?: Nullable<string>;
    city?: Nullable<string>;
    pincode?: Nullable<string>;
    country?: Nullable<string>;
    user?: Nullable<User>;
}

export interface User {
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
    isapproved?: Nullable<Approved_users>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    finalregapproved?: Nullable<boolean>;
    remarks?: Nullable<string>;
    warehouses?: Nullable<WareHouse[]>;
    trucks?: Nullable<TruckEntity[]>;
    reveiw_token?: Nullable<string>;
    JWT_token?: Nullable<string>;
    reset_token?: Nullable<string>;
    email_token?: Nullable<string>;
    email_verify?: Nullable<boolean>;
    reset_password_verification?: Nullable<DateTime>;
    companyContact?: Nullable<CompanyContact>;
    corporateAddress?: Nullable<CorporateAddress>;
}

export interface LoginResponse {
    access_token: string;
}

export interface IQuery {
    hello(): string | Promise<string>;
    listInitialRegistrations(): User[] | Promise<User[]>;
    listapprovealuser(): User[] | Promise<User[]>;
    listrejecteduser(): User[] | Promise<User[]>;
    listreveiweduser(): User[] | Promise<User[]>;
    listAllOtps(): string[] | Promise<string[]>;
    getOtpByEmail(email: string): Nullable<string> | Promise<Nullable<string>>;
    listNonApprovedUsers(userType: string, CustomerSubType?: Nullable<string>, VendorSubType?: Nullable<string>, OverseasAgentSubType?: Nullable<string>): User[] | Promise<User[]>;
    getUserById(userId: number): User | Promise<User>;
    getFinalRegisteredUserById(userId: number): User | Promise<User>;
    getUserByReviewToken(hashedToken: string): Nullable<User> | Promise<Nullable<User>>;
    getAllWarehouses(): WareHouse[] | Promise<WareHouse[]>;
    getWarehouseById(id: number): Nullable<WareHouse> | Promise<Nullable<WareHouse>>;
    getWarehousesByUserId(userId: number): WareHouse[] | Promise<WareHouse[]>;
    getTruck(id: string): TruckEntity | Promise<TruckEntity>;
    getAllTrucks(): TruckEntity[] | Promise<TruckEntity[]>;
    gettrucksByUserId(userId: number): TruckEntity[] | Promise<TruckEntity[]>;
}

export interface IMutation {
    acceptEmail(emailInput: EmailInput): User | Promise<User>;
    sendOTP(email: string): string | Promise<string>;
    verifyEmailotp(email: string): string | Promise<string>;
    verifyEmail(token: string, userid: number): string | Promise<string>;
    initialRegistration(userInput: SelectUserTypeAndSubtypeInput, emailInput: EmailInput): User | Promise<User>;
    savePassword(passwordInput: Password, userId: number): User | Promise<User>;
    adminRegister(Admin: Admin): User | Promise<User>;
    sendtoreveiwuser(userId: number): User | Promise<User>;
    finalreg(input: Finalreg, userId: number, userInput: UpdateUsertype): User | Promise<User>;
    approvereveiwedUser(userId: number, input: Updateapproved): User | Promise<User>;
    approveUser(userId: number, input: Updateapproved): User | Promise<User>;
    rejectUser(userId: number, input: SendFormTorejectedUser): User | Promise<User>;
    adminreject(userId: number, input: Adminreject): User | Promise<User>;
    adminreveiwreject(userId: number, input: Adminreject): User | Promise<User>;
    userReveiw(userId: number): string | Promise<string>;
    login(loginUserInput: LoginUserInput): LoginResponse | Promise<LoginResponse>;
    logout(userId: number): boolean | Promise<boolean>;
    reset_password_token(email: string): string | Promise<string>;
    reset_password_verify(email: string, resettoken: string): string | Promise<string>;
    reset_Save_password(email: string, password: ResetPasswordInput): string | Promise<string>;
    createWarehouse(input: WarehouseInput): WareHouse | Promise<WareHouse>;
    updateWarehouse(id: number, input: WarehouseInput): WareHouse | Promise<WareHouse>;
    deleteWarehouse(id: number): boolean | Promise<boolean>;
    createTruck(truckData: TruckDTO): TruckEntity | Promise<TruckEntity>;
    updateTruck(id: string, truckData: TruckDTO): TruckEntity | Promise<TruckEntity>;
    deleteTruck(id: string): boolean | Promise<boolean>;
    updateProfilecorporateAdress(userId: number, corporateAddressDto: CorporateAddressDto): User | Promise<User>;
    updateProfileCompanyContact(userId: number, companyContactDto: CompanyContactDto): User | Promise<User>;
}

export type DateTime = any;
type Nullable<T> = T | null;
