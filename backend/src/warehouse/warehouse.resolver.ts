import { Resolver, Query, Mutation, Args, Int,ID} from '@nestjs/graphql';
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
  @Query(() => [WareHouse], { name: 'getRejectedWarehouseList' })
  async getRejectedWarehouseList(): Promise<WareHouse[]> {
    return this.warehouseService.getRejectedWarehouseList();
  }
  @Query(()=>[WareHouse], { name: 'getapprovedWarehouseList' })
  async getApprovedWarehouseList(): Promise<WareHouse[]> {
    return this.warehouseService.getWarehouseApprovedList();
  }
  @Query(() => [WareHouse], { name: 'getWarehousereveiwedlist' })
  async getWarehousereveiwedlist(): Promise<WareHouse[]> {
    return this.warehouseService.getWarehousereveiwedlist();
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
    //@Args('userId') userId: number,
    @Args('warehouseid') warehouseId: number,
    @Args('approvedinput') approvedInput: ApprovedWarehouseInput,
  ): Promise<WareHouse> {
    try {
      const approvedWarehouse = await this.warehouseService.approveWarehouse(
        
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
    //@Args('userid', { type: () => Int }) userId: number,
    @Args('warehouseid', { type: () => Int }) warehouseId: number,
    @Args('remarks', { type: () => String }) remarks: string,
  ): Promise<WareHouse> {
    try {
      return await this.warehouseService.warehousereject(warehouseId, remarks);
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
  @Query(() => [WareHouse], { name: 'getWarehousePendingForApprovalListbyuserid' })
  async getWarehousePendingForApprovalListbyuserid(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<WareHouse[]> {
    return this.warehouseService.getWarehousePendingForApprovalListbyuserid(userId);
  }
  @Query(() => [WareHouse], { name: 'getWarehouseapprovedlistbyuserid' })
  async getWarehouseapprovedlistbyuserid(
    @Args('userId', { type: () => Int }) userId:number,
  ): Promise<WareHouse[]> {
    return this.warehouseService.getWarehouseApprovedListbyuserid(userId);
  }
  @Query(() => [WareHouse], { name: 'getWarehouseReveiwedlistbyuserid' })
  async getWarehouseReveiwedlistbyuserid(
    @Args('userId', { type: () => Int}) userId:number,
  ): Promise<WareHouse[]> {
    return this.warehouseService.getWarehouseReveiwedListbyuserid(userId);
  }
  @Query(() => [String], { name: 'totalsquareAreaAvailiable' })
  async totalsquareAreaAvailiable(): Promise<string[]> {
    return this.warehouseService.totalsquareAreaAvailiable();
  }

  @Query(() => [String!])
  async totalsquareAreaAvailiableforuserid(@Args('userId') userId: number): Promise<string[]> {
    return this.warehouseService.getTotalSquareAreaForUser(userId);
  }
  @Query(() => [String!])
  async occupiedspaceforuserid(@Args('userId') userId: number):Promise<string[]>{
    return this.warehouseService.occupiedSpaceForUser(userId);
  }
  @Query(() => [String],{name:'OccupiedSpace'})
  async occupiedSpace(): Promise<string[]> {
    return this.warehouseService.occupiedspace();
  }
  @Query(() => [String],{name:'UnoccupiedSpace'})
  async unoccupiedspace(): Promise<string[]>{
    return this.warehouseService.unoccupiedspace();
  }
  @Query(() => [String!])
  async unoccupiedspaceforuserid(@Args('userId') userId: number):Promise<string[]>{
    return this.warehouseService.unoccupiedSpaceForUser(userId);
  }
  @Query(()=>[Number],{name:'storagechargeperPallet'})
  async storagechargeperPallet(): Promise<number[]>{
    return this.warehouseService.storagechargeperPallet();
  }
  @Query(() => [Number!])
async storagechargeperPalletforuserid(@Args('userId') userId: number): Promise<number[]> {
  return this.warehouseService.storagechargeperPalletForUser(userId);
}
@Query(() => [String],{name:'minimumstorageareaperpallet'})
  async minimumstorageareaperpallet(): Promise<string[]>{
    return this.warehouseService.minimumStorageAreaperPallet();
  }
 @Query(()=>[String!])
 async minimumStorageareaperpalletForUser(@Args('userId') userId: number): Promise<string[]>{
   return this.warehouseService.minimumStorageareaperpalletForUser(userId);
 }

 @Query(()=>[Number],{name:'minimumstoragechargeperPallet'})
 async minimumstoragechargeperPallet(): Promise<number[]>{
   return this.warehouseService.minimumstoragechargeperPallet();
 }

 @Query(() => [Number!])
 async minimumstoragechargeperPalletforuserid(@Args('userId') userId: number): Promise<number[]> {
   return this.warehouseService.minimumstoragechargeperPalletForUser(userId);
 }
 @Query(() => Int, { name: 'totalStorageChargesPerPalletSum' })
 async getTotalStorageChargesPerPalletSum(): Promise<number> {
   return this.warehouseService.getTotalStorageChargesPerPalletSum();
 }

 @Query(() => Int, { name: 'totalStorageChargesPerPalletSumforuser' })
 async getTotalStorageChargesPerPalletSumforuser(
   @Args('userId', { type: () => Int }) userId: number,
 ): Promise<number> {
   return this.warehouseService.getTotalStorageChargesPerPalletSumforuser(userId);
 }
 @Query(() => Int, { name: 'getTotalstorageChargesSum' })
  async getTotalstorageChargesSum(): Promise<number> {
    return this.warehouseService.getTotalstorageChargesSum();
  }

  @Query(() => Int, { name: 'getTotalstorageChargesSumforuser' })
  async getTotalstorageChargesSumforuser(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<number> {
    return this.warehouseService.getTotalstorageChargesSumforuser(userId);
  }

  @Query(() => Int, { name: 'getTotalstorageCharges_per_palletSum' })
  async getTotalstorageCharges_per_palletSum(): Promise<number> {
    return this.warehouseService.getTotalstorageCharges_per_palletSum();
  }

  @Query(() => Int, { name: 'getTotalstorageCharges_per_palletSumforuser' })
  async getTotalstorageCharges_per_palletSumforuser(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<number> {
    return this.warehouseService.getTotalstorageCharges_per_palletSumforuser(userId);
  }
  @Query(() => Int, { name: 'getTotalminimumStorageCharges_per_palletSum' })
  async getTotalminimumStorageCharges_per_palletSum(): Promise<number> {
    return this.warehouseService.getTotalminimumStorageCharges_per_palletSum();
  }

  @Query(() => Int, { name: 'getTotalminimumStorageCharges_per_palletSumforuser' })
  async getTotalminimumStorageCharges_per_palletSumforuser(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<number> {
    return this.warehouseService.getTotalminimumStorageCharges_per_palletSumforuser(userId);
  }

  @Query(() => Int, { name: 'getTotalminimumStorageRentSum' })
  async getTotalminimumStorageRentSum(): Promise<number> {
    return this.warehouseService.getTotalminimumStorageRentSum();
  }

  @Query(() => Int, { name: 'getTotalminimumStorageRentSumforuser' })
  async getTotalminimumStorageRentSumforuser(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<number> {
    return this.warehouseService.getTotalminimumStorageRentSumforuser(userId);
  }

  @Query(() => Int, { name: 'getTotaloccupiedspaceSumforuser' })
  async getTotaloccupiedspaceSumforuser(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<number> {
    return this.warehouseService.getTotaloccupiedspaceSumforuser(userId);
  }

  @Query(() => Int, { name: 'getTotaloccupiedspaceSum' })
  async getTotaloccupiedspaceSum(): Promise<number> {
    return this.warehouseService.getTotaloccupiedspaceSum();
  }
  @Query(() => Int, { name: 'getTotalunoccupiedspaceSumforuser' })
  async getTotalunoccupiedspaceSumforuser(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<number> {
    return this.warehouseService.getTotaloccupiedspaceSumforuser(userId);
  }

  @Query(() => Int, { name: 'getTotalunoccupiedspaceSum' })
  async getTotalunoccupiedspaceSum(): Promise<number> {
    return this.warehouseService.getTotaloccupiedspaceSum();
  }

  @Query(() => Int, { name: 'getTotalavailiableareaSumforuser' })
  async getTotalavailiableareaSumforuser(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<number> {
    return this.warehouseService.getTotalavailiableareaSumforuser(userId);
  }

  @Query(() => Int, { name: 'getTotalabviableareaSum' })
  async getTotalabviableareaSum(): Promise<number> {
    return this.warehouseService.getTotaloccupiedspaceSum();
  }

  @Query(() => [WareHouse], { name: 'warehousesPendingApproval' })
  async getWarehousesPendingApproval(): Promise<WareHouse[]> {
    return this.warehouseService.getWarehousesPendingApproval();
  }
  @Mutation(() => WareHouse, { name: 'setWarehouseStatusToApprovalPending' })
  async setWarehouseStatusToApprovalPending(
    @Args('warehouseId', { type: () => Int }) warehouseId: number,
  ): Promise<WareHouse> {
    return this.warehouseService.setWarehouseStatusToApprovalPending(warehouseId);
  }
  @Mutation(() => String)
  async warehouseReveiw(@Args('warehouseId') warehouseId: number): Promise<string> {
    return this.warehouseService.sendWarehouseReview(warehouseId);
  }
  







  
}
