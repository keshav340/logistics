
import { Resolver, Query, Mutation, Args,ID,Int} from '@nestjs/graphql';
import { TruckEntity } from './truck.entity';
import { TruckService } from './truck.service';
import { TruckDTO } from './truck.dto';

@Resolver(() => TruckEntity)
export class TruckResolver {
  constructor(private truckService: TruckService) {}

  @Query(() => TruckEntity)
  async getTruck(@Args('id', { type: () => ID }) id: number): Promise<TruckEntity> {
    return this.truckService.getTruckById(id);
  }

  @Query(() => [TruckEntity])
  async getAllTrucks(): Promise<TruckEntity[]> {
    return this.truckService.getAllTrucks();
  }

  @Mutation(() => TruckEntity)
  async createTruck(@Args('truckData') truckData: TruckDTO): Promise<TruckEntity> {
    return this.truckService.createTruck(truckData);
  }

  @Mutation(() => TruckEntity)
  async updateTruck(
    @Args('id', { type: () => ID }) id: number,
    @Args('truckData') truckData: TruckDTO,
  ): Promise<TruckEntity> {
    return this.truckService.updateTruck(id, truckData);
  }

  @Mutation(() => Boolean)
  async deleteTruck(@Args('id', { type: () => ID }) id: number): Promise<boolean> {
    return this.truckService.deleteTruck(id);
  }
  @Query(() => [TruckEntity])
  async gettrucksByUserId(@Args('userId', { type: () => Int }) userId: number) {
    return this.truckService.getTrucksByUserId(userId);
  }
}
