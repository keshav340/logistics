import { registerEnumType } from '@nestjs/graphql';

export enum UserType {
    CUSTOMER = 'CUSTOMER',
    VENDOR = 'VENDOR',
    OVERSEAS_AGENT = 'OVERSEAS_AGENT',
    Admin = 'ADMIN',
  }
  
  export enum CustomerSubType {
    MANUFACTURER = 'MANUFACTURER / OEM',
    MERCHANT_TRADER = 'MERCHANT / TRADER', 
    MANUFACTURER_EXPORTER = 'MANUFACTURER EXPORTER',
    MERCHANT_EXPORTER = 'MERCHANT EXPORTER',
    // Add other sub-types for customers
  }
  
  // Register the enum with GraphQL
  registerEnumType(CustomerSubType, {
    name: 'CustomerSubType', // The name to use in the GraphQL schema
    description: 'The subtype of a customer', // Optional description
  });
  
  export enum VendorSubType {
    WAREHOUSE_COMPANY = 'Warehouse Company',
    COLD_STORAGE_COMPANY = 'Cold Storage Company',
    // Add other sub-types for vendors
  }
  registerEnumType(VendorSubType, {
    name: 'VendorSubType',
    description: 'The subtype of a vendor',
    
  });
  
  export enum OverseasAgentSubType {
    FOREIGN_AGENT = 'Foreign Agent',
  }
  registerEnumType(OverseasAgentSubType, {
    name: 'OverseasAgentSubType',
    description: 'The subtype of an overseas agent',
  })
  
  registerEnumType(UserType, {
    name: 'UserType',
    description: 'The type of user',
  });