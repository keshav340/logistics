// airport.resolver.ts

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AirportService } from './code.service';
import { CreateAirportInput } from './code.dto';
import { AirportPortCode } from './code.entity';
import { City, Port, OceanFreight, Shipment } from './shipment.model';
@Resolver('Airport')
export class AirportResolver {
  constructor(private readonly airportService: AirportService) {}

  @Query(returns => [AirportPortCode])
  async airportSuggestions(@Args('searchTerm') searchTerm: string) {
    return this.airportService.findSuggestions(searchTerm);
   }

  @Mutation(returns => AirportPortCode)
  async createAirport(@Args('input') input: CreateAirportInput) {
    return this.airportService.createAirport(input);
  }
  @Mutation(returns=>AirportPortCode)
  async associateCoordinates(
    @Args('code') code: string,
    @Args('latitude') latitude: number,
    @Args('longitude') longitude: number,
  ): Promise<AirportPortCode | undefined> {
    return this.airportService.associateCoordinates(code, latitude, longitude);
  }

  @Query(returns => AirportPortCode) 
  async getCoordinatesByCode(@Args('code') code: string): Promise<{ latitude: number; longitude: number } | undefined> {
    return this.airportService.getCoordinatesByCode(code);
  }
  @Query(() => [Shipment])
  async getShipmentDetails(
    @Args('fromCode') fromCode: string,
    @Args('toCode') toCode: string,
    @Args('st20') st20: number,
    @Args('currency') currency: string,
  ): Promise<Shipment[]> {
    return this.airportService.getShipmentDetails(fromCode, toCode, st20, currency);
  }


}
