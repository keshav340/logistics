// src/warehouse/warehouse.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Warehouse } from  'src/warehouse/warehouse.entity'
import { WarehouseInput } from 'src/warehouse/warehouse.input';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>,
  ) {}

  async create(input: WarehouseInput): Promise<Warehouse> {
    const warehouse = this.warehouseRepository.create(input);
    return this.warehouseRepository.save(warehouse);
  }

  async findAll(): Promise<Warehouse[]> {
    return this.warehouseRepository.find();
  }

  async findOne(id: number): Promise<Warehouse> {
    return this.warehouseRepository.findOne({where:{id:id}});
  }

  async update(id: number, input: WarehouseInput): Promise<Warehouse> {
    await this.warehouseRepository.update(id, input);
    return this.warehouseRepository.findOne({where:{id:id}});
  }

  async remove(id: number): Promise<Warehouse> {
    const warehouse = await this.warehouseRepository.findOne({where:{id:id}});
    await this.warehouseRepository.delete(id);
    return warehouse;
  }
}
