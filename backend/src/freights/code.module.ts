// code.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirportPortCode } from './code.entity';
import { AirportService } from './code.service';
import { AirportResolver } from './code.resolver';
@Module({
  imports: [TypeOrmModule.forFeature([AirportPortCode])],
  providers: [AirportResolver, AirportService],
})
export class CodeModule {}
