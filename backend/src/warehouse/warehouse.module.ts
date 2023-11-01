import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WareHouse } from "./warehouse.entity";
import { WarehouseService } from "./warehouse.service";
import { WarehouseResolver } from "./warehouse.resolver";
import { User } from "src/user/user.entity";
@Module({
    imports: [TypeOrmModule.forFeature([WareHouse,User]),],
    controllers: [],
    providers:[WarehouseService,WarehouseResolver],
  })
  export class WareHouseModule {}
  