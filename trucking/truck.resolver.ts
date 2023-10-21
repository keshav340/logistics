import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Trucking } from './truck.entity';
import { TruckService } from './truck.service';
import { truckInput } from './dto/truck.dto';

@Resolver(() => Trucking)
export class TRUCKResolver {
  constructor(private truckService: TruckService) {}

  @Query(() => [Trucking])
  async getAlltrucks() {
    return this.truckService.getAlltrucks();
  }

  @Query(() => Trucking, { nullable: true })
  async gettruckById(@Args('id', { type: () => Int }) id: number) {
    return this.truckService.gettruckById(id);
  }

  @Mutation(() => Trucking)
  async createtruck(@Args('input') input: truckInput) {
    return this.truckService.createtruck(input);
  }

  @Mutation(() => Trucking)
  async updatetruck(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: truckInput,
  ) {
    return this.truckService.updatetruck(id, input);
  }

  @Mutation(() => Boolean)
  async deletetruck(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.truckService.deletetruck(id);
  }
}
