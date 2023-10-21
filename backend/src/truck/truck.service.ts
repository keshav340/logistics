// truck.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TruckEntity } from './truck.entity';
import { TruckDTO } from './truck.dto';

@Injectable()
export class TruckService {
  constructor(
    @InjectRepository(TruckEntity)
    private readonly truckRepository: Repository<TruckEntity>,
  ) {}

  async createTruck(truckData: TruckDTO): Promise<TruckEntity> {
    const truck = this.truckRepository.create(truckData);
    return await this.truckRepository.save(truck);
  }

  async getTruckById(id: number): Promise<TruckEntity | null> {
    return this.truckRepository.findOne({where:{id: id}});
  }

  async updateTruck(id: number, truckData: TruckDTO): Promise<TruckEntity | null> {
    await this.truckRepository.update(id, truckData);
    return this.getTruckById(id);
  }

  async deleteTruck(id: number): Promise<boolean> {
    const result = await this.truckRepository.delete(id);
    return result.affected > 0;
  }

  async getAllTrucks(): Promise<TruckEntity[]> {
    return this.truckRepository.find();
  }
}

