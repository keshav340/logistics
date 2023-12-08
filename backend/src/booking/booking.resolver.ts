// src/booking/booking.resolver.ts

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './booking.entity';
import { BookingInput } from './dto/booking.input';

@Resolver(() => Booking)
export class BookingResolver {
  constructor(private readonly bookingService: BookingService) {}

  @Mutation(() => Booking)
  async createBooking(@Args('bookingInput') bookingInput: BookingInput): Promise<Booking> {
    return this.bookingService.createBooking(bookingInput);
  }

  @Query(() => Booking)
  async booking(@Args('id', { type: () => Int }) id: number): Promise<Booking> {
    const booking = await this.bookingService.getBookingById(id);
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return booking;
  }

  @Query(() => [Booking])
  async allBookings(): Promise<Booking[]> {
    return this.bookingService.getAllBookings();
  }

  @Mutation(() => Booking)
  async updateBooking(
    @Args('id', { type: () => Int }) id: number,
    @Args('bookingInput') bookingInput: BookingInput,
  ): Promise<Booking> {
    return this.bookingService.updateBooking(id, bookingInput);
  }

  @Mutation(() => Boolean)
  async deleteBooking(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.bookingService.deleteBooking(id);
  }

  
}
