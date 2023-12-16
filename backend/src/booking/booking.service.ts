// src/booking/booking.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { BookingInput } from './dto/booking.input';
import { WareHouse } from '../warehouse/warehouse.entity';
import { User } from 'src/user/user.entity';
import { getDistance } from 'geolib';
@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(WareHouse)
    private warehouseRepository: Repository<WareHouse>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createBooking(bookingInput: BookingInput): Promise<Booking> {
    const { warehouseId, userId, ...bookingData } = bookingInput;
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // Check if the warehouse exists
    const warehouse = await this.warehouseRepository.findOne({ where: { id: warehouseId } });
    if (!warehouse) {
      throw new NotFoundException(`Warehouse with ID ${warehouseId} not found`);
    }

    // Create a new booking and associate it with the warehouse
    const booking = this.bookingRepository.create({
      ...bookingData,
      warehouse,
      user,
      
    });
    const bookingReference = await this.generateBookingReference();
    booking.uniquecode = bookingReference

    return this.bookingRepository.save(booking);
  }

  async getBookingById(id: number): Promise<Booking> {
    return this.bookingRepository.findOne({ where: { id }, relations: ['warehouse', 'user'] });
  }

  async getAllBookings(): Promise<Booking[]> {
    return this.bookingRepository.find({ relations: ['warehouse', 'user'] });
  }

  async updateBooking(id: number, bookingInput: BookingInput): Promise<Booking> {
    const { warehouseId, userId, ...bookingData } = bookingInput;

    const booking = await this.bookingRepository.findOne({ where: { id }, relations: ['warehouse', 'user'] });
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const warehouse = await this.warehouseRepository.findOne({ where: { id: warehouseId } });
    if (!warehouse) {
      throw new NotFoundException(`Warehouse with ID ${warehouseId} not found`);
    }

    // Update booking data
    booking.moveInDate = bookingData.moveInDate;
    booking.moveOutDate = bookingData.moveOutDate;
    booking.spaceMaterialType = bookingData.spaceMaterialType;
    booking.specialInstructions = bookingData.specialInstructions;
    booking.warehouse = warehouse;
    booking.user = user;

    return this.bookingRepository.save(booking);
  }

  async deleteBooking(id: number): Promise<boolean> {
    const booking = await this.bookingRepository.findOne({ where: { id } });
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    await this.bookingRepository.remove(booking);
    return true;
  }
  async generateBookingReference(): Promise<string> {
    const currentYear = new Date().getFullYear();
    const sessionStartYear = currentYear - 1; // Assuming the session starts in the previous year
    const sessionEndYear = currentYear;
    const session = `${sessionStartYear.toString().slice(-2)}-${sessionEndYear.toString().slice(-2)}`;

    const bookingsCount = await this.bookingRepository.count();

    // Pad the booking ID with zeros to ensure it has 5 digits
    const bookingId = bookingsCount.toString().padStart(5, '0');

    return `FR-BK-${session}-${bookingId}`;
  }

  async searchByUserLocation(userLatitude: number, userLongitude: number): Promise<WareHouse[]> {
    const allWarehouses = await this.warehouseRepository.find();
  
    const nearbyWarehouses = allWarehouses.filter((warehouse) => {
      const warehouseLatitude = warehouse.latitude;
      const warehouseLongitude = warehouse.longitude;
  
      // Check for null or undefined values before using getDistance
      if (warehouseLatitude !== null && warehouseLongitude !== null) {
        const distance = getDistance(
          { latitude: userLatitude, longitude: userLongitude },
          { latitude: warehouseLatitude, longitude: warehouseLongitude },
        );
  
        return distance <= 50000;
      }
  
      return false;
    });
  
    return nearbyWarehouses;
  }
  
  async getBookingsByUserId(userId: number): Promise<Booking[]> {
    return this.bookingRepository.find({
      where: { user: { id: userId } },
      relations: ['user', 'warehouse'], 
    });
  }

}
