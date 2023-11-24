import { RESOLVER_TYPE_METADATA,registerEnumType } from "@nestjs/graphql";

export enum warehouseApproval{
        Warehouse_Approval_pending = "Warehouse Approval pending",
        Warehouse_Approved = "Warehouse Approved",
        Warehouse_Rejected = "Warehouse Rejected",
        Warehouse_Reveiw_peding = "Warehouse Reveiw pending"

}

registerEnumType(warehouseApproval,{
    name:"WarehouseStatus",
    description:"Warehous status of the warehouse"

})