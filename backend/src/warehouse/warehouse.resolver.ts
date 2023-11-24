import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WareHouse } from './warehouse.entity';
import { WarehouseInput } from './dto/warehouse.dto';
import { WarehouseService } from './warehouse.service';
import { ApprovedWarehouseInput } from './dto/warehouseapproval.input';
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
  @Mutation(() => WareHouse)
  async approveWarehouse(
    @Args('userId') userId: number,
    @Args('warehouseid') warehouseId: number,
    @Args('approvedinput') approvedInput: ApprovedWarehouseInput,
  ): Promise<WareHouse> {
    try {
      const approvedWarehouse = await this.warehouseService.approveWarehouse(
        userId,
        warehouseId,
        approvedInput,
      );
      return approvedWarehouse;
    } catch (error) {
      throw new Error('Failed to approve warehouse: ' + error.message);
    }
  }
  @Mutation(()=>WareHouse)
  async warehousereject(
    @Args('userid', { type: () => Int }) userId: number,
    @Args('warehouseid', { type: () => Int }) warehouseId: number,
    @Args('remarks', { type: () => String }) remarks: string,
  ): Promise<WareHouse> {
    try {
      return await this.warehouseService.warehousereject(userId, warehouseId, remarks);
    } catch (error) {
      throw new Error(`Failed to reject warehouse: ${error.message}`);
    }
  }
  @Mutation(() => WareHouse)
  async sendforreveiwingWarehouse(
    @Args('userid', { type: () => Int }) userId: number,
    @Args('warehouseid', { type: () => Int }) warehouseId: number,
  ): Promise<WareHouse> {
    try {
      return await this.warehouseService.sendforreveiwingWarehouse(userId, warehouseId);
    } catch (error) {
      throw new Error(`Failed to send warehouse for review: ${error.message}`);
    }
  }
  @Mutation(() => WareHouse)
  async reveiwwarehousereject(
    @Args('userid', { type: () => Int }) userId: number,
    @Args('warehouseid', { type: () => Int }) warehouseId: number,
    @Args('remarks', { type: () => String }) remarks: string,
  ): Promise<WareHouse> {
    try {
      return await this.warehouseService.reveiwwarehousereject(userId, warehouseId, remarks);
    } catch (error) {
      throw new Error(`Failed to reject warehouse review: ${error.message}`);
    }
  }
  @Mutation(() => WareHouse)
  async reveiwwarehouseapproved(
    @Args('userid', { type: () => Int }) userId: number,
    @Args('warehouseid', { type: () => Int }) warehouseId: number,
    @Args('approvedinput') approvedInput: ApprovedWarehouseInput,
  ): Promise<WareHouse> {
    try {
      return await this.warehouseService.reveiwwarehouseapproved(userId, warehouseId, approvedInput);
    } catch (error) {
      throw new Error(`Failed to approve warehouse review: ${error.message}`);
    }
  }

}
