import { registerEnumType } from '@nestjs/graphql';

export enum UserType {
    CUSTOMER = 'CUSTOMER',
    VENDOR = 'VENDOR',
    OVERSEAS_AGENT = 'OVERSEAS_AGENT',
  }
  
  export enum CustomerSubType {
    MANUFACTURER = 'MANUFACTURER / OEM',
    MERCHANT_TRADER = 'MERCHANT / TRADER', 
    MANUFACTURER_EXPORTER = 'MANUFACTURER EXPORTER',
    MERCHANT_EXPORTER = 'MERCHANT EXPORTER',
    // Add other sub-types for customers
  }
  
  export enum VendorSubType {
    WAREHOUSE_COMPANY = 'Warehouse Company',
    COLD_STORAGE_COMPANY = 'Cold Storage Company',
    // Add other sub-types for vendors
  }
  
  export enum OverseasAgentSubType {
    FOREIGN_AGENT = 'Foreign Agent',
  }
  
  registerEnumType(UserType, {
    name: 'UserType',
    description: 'The type of user',
  });