import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Trucking } from './truck.entity';
import { TruckService } from './truck.service';
import { TRUCKResolver } from './truck.resolver';


@Module({
    imports: [TypeOrmModule.forFeature([Trucking]),],
    controllers: [],
    providers:[TruckService, TRUCKResolver],
  })
  export class truckModule {}
  