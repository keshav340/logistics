
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

export enum WarehouseStatus {
    Warehouse_Approval_pending = "Warehouse_Approval_pending",
    Warehouse_Approved = "Warehouse_Approved",
    Warehouse_Rejected = "Warehouse_Rejected",
    Warehouse_Reveiw_peding = "Warehouse_Reveiw_peding"
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

export enum ShippingMode {
    Port = "Port",
    Airport = "Airport"
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

export interface CompanyContactDto {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    designation?: Nullable<string>;
    mobileNo?: Nullable<string>;
    emailId?: Nullable<string>;
}

export interface CorporateAddressDto {
    address?: Nullable<string>;
    state?: Nullable<string>;
    city?: Nullable<string>;
    pincode?: Nullable<string>;
    country?: Nullable<string>;
}

export interface KycInput {
    certificate_of_registration?: Nullable<KeyValue>;
    company_pan_card?: Nullable<KeyValue>;
    aadhar_card?: Nullable<KeyValue>;
    pan_card?: Nullable<KeyValue>;
    iso_certificate?: Nullable<KeyValue>;
    aeo_certificate?: Nullable<KeyValue>;
    iata_certificate?: Nullable<KeyValue>;
    duns_certificate?: Nullable<KeyValue>;
    manufacturing_license?: Nullable<KeyValue>;
    warehouse_insurance?: Nullable<KeyValue>;
    any_other_trading_license?: Nullable<KeyValue>;
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
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
}

export interface ApprovedWarehouseInput {
    companyname?: Nullable<string>;
    Adress?: Nullable<string>;
    State?: Nullable<string>;
    city?: Nullable<string>;
    pincode?: Nullable<string>;
    country?: Nullable<string>;
    WarehouseType?: Nullable<warehouseType>;
    totalsquareArea?: Nullable<string>;
    totalavailiableareas?: Nullable<string>;
    occupied_spaces?: Nullable<string>;
    unoccupied_spaces?: Nullable<string>;
    racked_spaces?: Nullable<string>;
    minimumstoragerent?: Nullable<number>;
    minimum_storages_charges_per_pallet?: Nullable<number>;
    minimum_storage_Area?: Nullable<string>;
    minimum_storage_area_per_pallet?: Nullable<string>;
    storage_charges?: Nullable<number>;
    storage_charges_per_pallet?: Nullable<number>;
    HazardousStorageType?: Nullable<hazardousStorageType>;
    TempaeratureType?: Nullable<temperatureType>;
    TemperatureCapacity?: Nullable<temperatureCapacity>;
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
    remarks?: Nullable<string>;
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

export interface BookingInput {
    moveInDate?: Nullable<DateTime>;
    moveOutDate?: Nullable<DateTime>;
    spaceMaterialType?: Nullable<string>;
    specialInstructions?: Nullable<string>;
    warehouseId?: Nullable<number>;
    userId?: Nullable<number>;
}

export interface CreateAirportInput {
    code?: Nullable<string>;
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
    Country?: Nullable<string>;
    State?: Nullable<string>;
    name?: Nullable<string>;
    ShipmentMode?: Nullable<ShippingMode>;
}

export interface CreateBookingshippingInput {
    departure?: Nullable<string>;
    arrival?: Nullable<string>;
    readytoload?: Nullable<string>;
    typeofdelivery?: Nullable<string>;
    cargo_details?: Nullable<string>;
    price?: Nullable<string>;
}

export interface BookingshippingContactinfoInput {
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    phoneno?: Nullable<string>;
    email?: Nullable<string>;
    description?: Nullable<string>;
}

export interface Booking {
    id: string;
    moveInDate?: Nullable<DateTime>;
    moveOutDate?: Nullable<DateTime>;
    spaceMaterialType?: Nullable<string>;
    specialInstructions?: Nullable<string>;
    uniquecode?: Nullable<string>;
    warehouse?: Nullable<WareHouse>;
    user?: Nullable<User>;
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
    WarehouseApproval?: Nullable<WarehouseStatus>;
    remarks?: Nullable<string>;
    uniqueid?: Nullable<string>;
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
    booking?: Nullable<Booking>;
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

export interface Kyc {
    id: string;
    certificate_of_registration?: Nullable<KeyValue>;
    company_pan_card?: Nullable<KeyValue>;
    aadhar_card?: Nullable<KeyValue>;
    pan_card?: Nullable<KeyValue>;
    iso_certificate?: Nullable<KeyValue>;
    aeo_certificate?: Nullable<KeyValue>;
    iata_certificate?: Nullable<KeyValue>;
    duns_certificate?: Nullable<KeyValue>;
    manufacturing_license?: Nullable<KeyValue>;
    warehouse_insurance?: Nullable<KeyValue>;
    any_other_trading_license?: Nullable<KeyValue>;
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
    kyc?: Nullable<Kyc>;
    bookings?: Nullable<Booking[]>;
}

export interface LoginResponse {
    access_token: string;
}

export interface CodeEntity {
    id: string;
    Country?: Nullable<string>;
    State?: Nullable<string>;
    shippingMode?: Nullable<ShippingMode>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
}

export interface Bookingshipping {
    id: string;
    departure?: Nullable<string>;
    arrival?: Nullable<string>;
    readytoload?: Nullable<string>;
    typeofdelivery?: Nullable<string>;
    cargo_details?: Nullable<string>;
    price?: Nullable<string>;
}

export interface BookingshippingContactinfo {
    id: string;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    phoneno?: Nullable<string>;
    email?: Nullable<string>;
    description?: Nullable<string>;
}

export interface City {
    name?: Nullable<string>;
    countryCode?: Nullable<string>;
}

export interface Port {
    name?: Nullable<string>;
    code?: Nullable<string>;
    countryCode?: Nullable<string>;
}

export interface OceanFreight {
    price?: Nullable<number>;
    transitTime?: Nullable<string>;
    shippingLine?: Nullable<string>;
}

export interface Shipment {
    shipmentId?: Nullable<string>;
    cityFrom?: Nullable<City>;
    cityTo?: Nullable<City>;
    portFrom?: Nullable<Port>;
    portTo?: Nullable<Port>;
    freight?: Nullable<OceanFreight[]>;
}

export interface City1 {
    id?: Nullable<number>;
    code?: Nullable<string>;
    lat?: Nullable<number>;
    lng?: Nullable<number>;
    name?: Nullable<string>;
    countryCode?: Nullable<string>;
}

export interface PortFee {
    abbr: string;
    title: string;
    text?: Nullable<string>;
    originalPrice: number;
    originalCurrency: string;
    price: number;
    perLot: boolean;
}

export interface Truck {
    price: number;
    distance: string;
    transitTime: string;
    originalPrice: number;
    originalCurrency: string;
    interpolation?: Nullable<boolean>;
}

export interface OceanFreight1 {
    shippingLine?: Nullable<string>;
    logo?: Nullable<string>;
    price?: Nullable<number>;
    distance?: Nullable<string>;
    comment?: Nullable<string>;
    originalPrice?: Nullable<number>;
    originalCurrency?: Nullable<string>;
    overdue?: Nullable<boolean>;
    co2?: Nullable<number>;
    transitTime?: Nullable<string>;
    portFeesFrom?: Nullable<PortFee[]>;
    portFeesTo?: Nullable<PortFee[]>;
    truckFrom?: Nullable<Truck>;
    truckTo?: Nullable<Truck>;
}

export interface Port1 {
    id?: Nullable<number>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    countryCode?: Nullable<string>;
    lat?: Nullable<number>;
    lng?: Nullable<number>;
}

export interface Shipmentlcl {
    shipmentId?: Nullable<string>;
    transportationMode?: Nullable<string>;
    currency?: Nullable<string>;
    cityFrom?: Nullable<City1>;
    cityTo?: Nullable<City1>;
    portFrom?: Nullable<Port1>;
    portTo?: Nullable<Port1>;
    oceanFreight?: Nullable<OceanFreight1>;
}

export interface City2 {
    id?: Nullable<number>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    countryCode?: Nullable<string>;
    lat?: Nullable<number>;
    lng?: Nullable<number>;
}

export interface Port2 {
    id?: Nullable<number>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    countryCode?: Nullable<string>;
    lat?: Nullable<number>;
    lng?: Nullable<number>;
}

export interface Rail {
    price?: Nullable<number>;
    distance?: Nullable<string>;
    transitTime?: Nullable<string>;
    interpolation?: Nullable<boolean>;
}

export interface OceanFreight2 {
    shippingLine?: Nullable<string>;
    logo?: Nullable<string>;
    price?: Nullable<number>;
    comment?: Nullable<string>;
    distance?: Nullable<string>;
    originalPrice?: Nullable<number>;
    originalCurrency?: Nullable<string>;
    transitTime?: Nullable<string>;
    validTo?: Nullable<string>;
    co2?: Nullable<number>;
    overdue?: Nullable<boolean>;
    railFrom?: Nullable<Rail>;
    railTo?: Nullable<Rail>;
}

export interface Shipmentbulk {
    shipmentId?: Nullable<string>;
    transportationMode?: Nullable<string>;
    currency?: Nullable<string>;
    cityFrom?: Nullable<City2>;
    cityTo?: Nullable<City2>;
    portFrom?: Nullable<Port2>;
    portTo?: Nullable<Port2>;
    oceanFreight?: Nullable<OceanFreight2>;
}

export interface Default {
    services?: Nullable<string[]>;
}

export interface Truck4 {
    price?: Nullable<number>;
    distance?: Nullable<string>;
    transitTime?: Nullable<string>;
    originalPrice?: Nullable<number>;
    originalCurrency?: Nullable<string>;
    interpolation?: Nullable<boolean>;
}

export interface City4 {
    id?: Nullable<number>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    countryCode?: Nullable<string>;
    lat?: Nullable<number>;
    lng?: Nullable<number>;
}

export interface Port4 {
    id?: Nullable<number>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    countryCode?: Nullable<string>;
    lat?: Nullable<number>;
    lng?: Nullable<number>;
}

export interface AirFreight4 {
    shippingLine?: Nullable<string>;
    logo?: Nullable<string>;
    price?: Nullable<number>;
    distance?: Nullable<string>;
    originalPrice?: Nullable<number>;
    originalCurrency?: Nullable<string>;
    transitTime?: Nullable<string>;
    validTo?: Nullable<string>;
    overdue?: Nullable<boolean>;
    portFeesFrom?: Nullable<PortFees[]>;
    portFeesTo?: Nullable<PortFees[]>;
    truckFrom?: Nullable<Truck4>;
    truckTo?: Nullable<Truck4>;
}

export interface PortFees {
    abbr?: Nullable<string>;
    title?: Nullable<string>;
    originalPrice?: Nullable<number>;
    originalCurrency?: Nullable<string>;
    text?: Nullable<string>;
    price?: Nullable<number>;
    perLot?: Nullable<boolean>;
}

export interface Shipmentair {
    shipmentId?: Nullable<string>;
    transportationMode?: Nullable<string>;
    currency?: Nullable<string>;
    cityFrom?: Nullable<City4>;
    cityTo?: Nullable<City4>;
    portFrom?: Nullable<Port4>;
    portTo?: Nullable<Port4>;
    airFreight?: Nullable<AirFreight4>;
}

export interface Default4 {
    services?: Nullable<string[]>;
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
    getRejectedWarehouseList(): WareHouse[] | Promise<WareHouse[]>;
    getapprovedWarehouseList(): WareHouse[] | Promise<WareHouse[]>;
    getWarehousereveiwedlist(): WareHouse[] | Promise<WareHouse[]>;
    getWarehouseById(id: number): Nullable<WareHouse> | Promise<Nullable<WareHouse>>;
    getWarehousesByUserId(userId: number): WareHouse[] | Promise<WareHouse[]>;
    getWarehousePendingForApprovalListbyuserid(userId: number): WareHouse[] | Promise<WareHouse[]>;
    getWarehouseapprovedlistbyuserid(userId: number): WareHouse[] | Promise<WareHouse[]>;
    getWarehouseReveiwedlistbyuserid(userId: number): WareHouse[] | Promise<WareHouse[]>;
    totalsquareAreaAvailiable(): string[] | Promise<string[]>;
    totalsquareAreaAvailiableforuserid(userId: number): string[] | Promise<string[]>;
    occupiedspaceforuserid(userId: number): string[] | Promise<string[]>;
    OccupiedSpace(): string[] | Promise<string[]>;
    UnoccupiedSpace(): string[] | Promise<string[]>;
    unoccupiedspaceforuserid(userId: number): string[] | Promise<string[]>;
    storagechargeperPallet(): number[] | Promise<number[]>;
    storagechargeperPalletforuserid(userId: number): number[] | Promise<number[]>;
    minimumstorageareaperpallet(): string[] | Promise<string[]>;
    minimumStorageareaperpalletForUser(userId: number): string[] | Promise<string[]>;
    minimumstoragechargeperPallet(): number[] | Promise<number[]>;
    minimumstoragechargeperPalletforuserid(userId: number): number[] | Promise<number[]>;
    totalStorageChargesPerPalletSum(): number | Promise<number>;
    totalStorageChargesPerPalletSumforuser(userId: number): number | Promise<number>;
    getTotalstorageChargesSum(): number | Promise<number>;
    getTotalstorageChargesSumforuser(userId: number): number | Promise<number>;
    getTotalstorageCharges_per_palletSum(): number | Promise<number>;
    getTotalstorageCharges_per_palletSumforuser(userId: number): number | Promise<number>;
    getTotalminimumStorageCharges_per_palletSum(): number | Promise<number>;
    getTotalminimumStorageCharges_per_palletSumforuser(userId: number): number | Promise<number>;
    getTotalminimumStorageRentSum(): number | Promise<number>;
    getTotalminimumStorageRentSumforuser(userId: number): number | Promise<number>;
    getTotaloccupiedspaceSumforuser(userId: number): number | Promise<number>;
    getTotaloccupiedspaceSum(): number | Promise<number>;
    getTotalunoccupiedspaceSumforuser(userId: number): number | Promise<number>;
    getTotalunoccupiedspaceSum(): number | Promise<number>;
    getTotalavailiableareaSumforuser(userId: number): number | Promise<number>;
    getTotalabviableareaSum(): number | Promise<number>;
    warehousesPendingApproval(): WareHouse[] | Promise<WareHouse[]>;
    getTruck(id: string): TruckEntity | Promise<TruckEntity>;
    getAllTrucks(): TruckEntity[] | Promise<TruckEntity[]>;
    gettrucksByUserId(userId: number): TruckEntity[] | Promise<TruckEntity[]>;
    booking(id: number): Booking | Promise<Booking>;
    allBookings(): Booking[] | Promise<Booking[]>;
    searchWarehousesByUserLocation(userLatitude: number, userLongitude: number): WareHouse[] | Promise<WareHouse[]>;
    bookingsByUserId(userId: number): Booking[] | Promise<Booking[]>;
    Suggestions(searchTerm: string): CodeEntity[] | Promise<CodeEntity[]>;
    SuggestionsCountry(searchTerm: string): CodeEntity[] | Promise<CodeEntity[]>;
    SuggestionsState(searchTerm: string): CodeEntity[] | Promise<CodeEntity[]>;
    Suggestionsname(searchTerm: string): CodeEntity[] | Promise<CodeEntity[]>;
    getCoordinatesByCode(code: string): CodeEntity | Promise<CodeEntity>;
    getCoordinatesByName(name: string): CodeEntity | Promise<CodeEntity>;
    getShipmentDetails(fromshipmentMode: ShippingMode, fromCountry: string, fromstate: string, fromname: string, toshipmentMode: ShippingMode, toCountry: string, tostate: string, toname: string, ST20: number, ST40: number, REF20: number, REF40: number, HQ40: number, HQ45: number, currency: string, date: string): Shipment[] | Promise<Shipment[]>;
    getShipmentDetailslcl(fromshipmentMode: ShippingMode, fromCountry: string, fromstate: string, fromname: string, toshipmentMode: ShippingMode, toCountry: string, tostate: string, toname: string, currency: string, weight: number, volume: number, date: string): Shipmentlcl[] | Promise<Shipmentlcl[]>;
    getShipmentDetailsbulk(fromshipmentMode: ShippingMode, fromCountry: string, fromstate: string, fromname: string, toshipmentMode: ShippingMode, toCountry: string, tostate: string, toname: string, currency: string, weight: number, date: string): Shipmentbulk[] | Promise<Shipmentbulk[]>;
    getShipmentDetailsair(fromshipmentMode: ShippingMode, fromCountry: string, fromstate: string, fromname: string, toshipmentMode: ShippingMode, toCountry: string, tostate: string, toname: string, currency: string, weight: number, date: string): Shipmentair[] | Promise<Shipmentair[]>;
    bookingshippings(): Bookingshipping[] | Promise<Bookingshipping[]>;
    allcreatebookingcontact(): BookingshippingContactinfo | Promise<BookingshippingContactinfo>;
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
    finalreg(input: Finalreg, userId: number, userInput: UpdateUsertype, compcontact: CompanyContactDto, corpad: CorporateAddressDto, kycin: KycInput): User | Promise<User>;
    approvereveiwedUser(userId: number, input: Updateapproved, compcontact: CompanyContactDto, corpad: CorporateAddressDto, kycin: KycInput): User | Promise<User>;
    approveUser(userId: number, input: Updateapproved, compcontact: CompanyContactDto, corpad: CorporateAddressDto, kycin: KycInput): User | Promise<User>;
    rejectUser(userId: number, input: SendFormTorejectedUser, compcontact: CompanyContactDto, corpad: CorporateAddressDto, kycin: KycInput): User | Promise<User>;
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
    approveWarehouse(warehouseid: number, approvedinput: ApprovedWarehouseInput): WareHouse | Promise<WareHouse>;
    warehousereject(warehouseid: number, remarks: string): WareHouse | Promise<WareHouse>;
    sendforreveiwingWarehouse(userid: number, warehouseid: number): WareHouse | Promise<WareHouse>;
    reveiwwarehousereject(userid: number, warehouseid: number, remarks: string): WareHouse | Promise<WareHouse>;
    reveiwwarehouseapproved(userid: number, warehouseid: number, approvedinput: ApprovedWarehouseInput): WareHouse | Promise<WareHouse>;
    setWarehouseStatusToApprovalPending(warehouseId: number): WareHouse | Promise<WareHouse>;
    warehouseReveiw(warehouseId: number): string | Promise<string>;
    createTruck(truckData: TruckDTO): TruckEntity | Promise<TruckEntity>;
    updateTruck(id: string, truckData: TruckDTO): TruckEntity | Promise<TruckEntity>;
    deleteTruck(id: string): boolean | Promise<boolean>;
    createBooking(bookingInput: BookingInput): Booking | Promise<Booking>;
    updateBooking(id: number, bookingInput: BookingInput): Booking | Promise<Booking>;
    deleteBooking(id: number): boolean | Promise<boolean>;
    createAirport(input: CreateAirportInput): CodeEntity | Promise<CodeEntity>;
    updateAirport(input: CreateAirportInput, name: string): CodeEntity | Promise<CodeEntity>;
    associateCoordinates(code: string, latitude: number, longitude: number): CodeEntity | Promise<CodeEntity>;
    associateCoordinatesbyid(id: number, latitude: number, longitude: number): CodeEntity | Promise<CodeEntity>;
    createBookingshipping(input: CreateBookingshippingInput): Bookingshipping | Promise<Bookingshipping>;
    createbookingcontact(input: BookingshippingContactinfoInput): BookingshippingContactinfo | Promise<BookingshippingContactinfo>;
}

export type DateTime = any;
export type KeyValue = any;
type Nullable<T> = T | null;
