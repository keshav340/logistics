import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WareHouse } from './warehouse.entity';
import { WarehouseInput } from './dto/warehouse.dto';
import { WarehouseService } from './warehouse.service';

@Resolver(() => WareHouse)
export class WarehouseResolver {
  constructor(private warehouseService: WarehouseService) {}

  @Query(() => [WareHouse])
  async getAllWarehouses() {
    return this.warehouseService.getAllWarehouses();
  }

  @Query(() => WareHouse, { nullable: true })
  async getWarehouseById(@Args('id', { type: () => Int }) id: number) {
    return this.warehouseService.getWarehouseById(id);
  }

  @Mutation(() => WareHouse)
  async createWarehouse(@Args('input') input: WarehouseInput) {
    return this.warehouseService.createWarehouse(input);
  }

  @Mutation(() => WareHouse)
  async updateWarehouse(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: WarehouseInput,
  ) {
    return this.warehouseService.updateWarehouse(id, input);
  }

  @Mutation(() => Boolean)
  async deleteWarehouse(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.warehouseService.deleteWarehouse(id);
  }

  @Query(() => [WareHouse])
  async getWarehousesByUserId(@Args('userId', { type: () => Int }) userId: number) {
    return this.warehouseService.getWarehousesByUserId(userId);
  }
}
