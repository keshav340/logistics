import { registerEnumType } from '@nestjs/graphql';


export enum UserType {
    Merchant = 'Merchant',
    Trader = 'Trader',
    Manufacturer_exporter = 'Manufacturer Exporter',
    Merchant_exporter = 'Merchant Exporter',
    Buying_house = 'Buying House',
    Dealer = 'Dealer',
    Reseller = 'Reseller',
    Retailer = 'Retailer',
    freight_Forwarder = 'Freight Forwarder',
    threePL_logistic_provider = '3PL logistics Provider',
    PackersandMovers = 'Packers & Movers',
    Relocation_company = 'Relocation Company',
    Custom_brokers = 'Custom Brokers',
    cold_Storage_Company = 'Cold Storage Company',
    threePL_logistic_company = '3PL logistic company',
    tempo_owner = 'Tempo Owner',
    truck_Owner = 'Truck Owner',
    truck_fleet_company = 'Truck fleet company',
    container_Manufacturer = 'Container Manufacturer',
    insurance_Company = 'Insurance Company',
    packing_Company = 'Packing Company',
    packaging_Company = 'Packaging Company',
    foreign_agent = 'Foreign Agent',
    Admin = 'Admin',
    Other = 'Other',


}

registerEnumType(UserType, {
  name: 'UserType',
  description: 'The type of user',
});
