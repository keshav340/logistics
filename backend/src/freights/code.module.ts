// code.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeEntity } from './code.entity';
import { AirportService } from './code.service';
import { AirportResolver } from './code.resolver';
import { Bookingshipping } from './booking.entity';
import { BookingshippingContactinfo } from './bookingcontact.entity';
import { Bookingshippingbasicquestion } from './bookingbasic.entity';
@Module({
  imports: [TypeOrmModule.forFeature([CodeEntity,Bookingshipping,BookingshippingContactinfo,Bookingshippingbasicquestion])],
  providers: [AirportResolver, AirportService],
})
export class CodeModule {}
