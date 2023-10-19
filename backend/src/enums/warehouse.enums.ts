import { registerEnumType } from '@nestjs/graphql';
export enum warehouseType {
    coldStorageFacility = 'coldStorageFacility',
    generalWarehouse = 'generalWarehouse',
    referigeratedWarehouse = 'referigeratedWarehouse',
    fullFilmentCenter = 'fullFilmentCenter',
    petroleumWarehouse = 'petroleumWarehouse',
    bondedWarehouse = 'bondedWarehouse',
    hazCargoWarehouse = 'hazCargoWarehouse'
}

registerEnumType(warehouseType,{
    name: 'warehouseType',
    description: 'types of warehouse'
});