// code.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeEntity } from './code.entity';
import { AirportService } from './code.service';
import { AirportResolver } from './code.resolver';
@Module({
  imports: [TypeOrmModule.forFeature([CodeEntity])],
  providers: [AirportResolver, AirportService],
})
export class CodeModule {}
