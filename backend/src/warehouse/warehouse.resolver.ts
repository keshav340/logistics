// src/warehouse/warehouse.resolver.ts
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { WarehouseService } from './warehouse.service';
import { Warehouse } from "src/warehouse/warehouse.entity";
import { WarehouseInput } from 'src/warehouse/warehouse.input';

@Resolver(() => Warehouse)
export class WarehouseResolver {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Mutation(() => Warehouse)
  async createWarehouse(@Args('input') input: WarehouseInput): Promise<Warehouse> {
    return this.warehouseService.create(input);
  }

  @Query(() => [Warehouse])
  async getWarehouses(): Promise<Warehouse[]> {
    return this.warehouseService.findAll();
  }

  @Query(() => Warehouse)
  async getWarehouse(@Args('id', { type: () => ID }) id: number): Promise<Warehouse> {
    return this.warehouseService.findOne(id);
  }

  @Mutation(() => Warehouse)
  async updateWarehouse(
    @Args('id', { type: () => ID }) id: number,
    @Args('input') input: WarehouseInput,
  ): Promise<Warehouse> {
    return this.warehouseService.update(id, input);
  }

  @Mutation(() => Warehouse)
  async deleteWarehouse(@Args('id', { type: () => ID }) id: number): Promise<Warehouse> {
    return this.warehouseService.remove(id);
  }
}
