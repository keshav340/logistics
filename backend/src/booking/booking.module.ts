// src/booking/booking.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './booking.entity';
import { BookingService } from './booking.service';
import { BookingResolver } from './booking.resolver';
import { WareHouse } from 'src/warehouse/warehouse.entity';
import { User } from 'src/user/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Booking,WareHouse,User])],
  providers: [BookingService, BookingResolver],
  exports: [BookingService],
})
export class BookingModule {}
