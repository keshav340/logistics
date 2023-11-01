// truck.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TruckEntity } from './truck.entity';
import { TruckService } from './truck.service';
import { TruckResolver } from './truck.resolver';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TruckEntity,User])],
  providers: [TruckService, TruckResolver],
})
export class TruckModule {}
