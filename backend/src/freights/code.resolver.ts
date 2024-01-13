// airport.resolver.ts

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AirportService } from './code.service';
import { CreateAirportInput } from './code.dto';
import { CodeEntity } from './code.entity';
import { City, Port, OceanFreight, Shipment } from './shipment.model';
@Resolver('Airport')
export class AirportResolver {
  constructor(private readonly airportService: AirportService) {}

  @Query(returns => [CodeEntity])
  async Suggestions(@Args('searchTerm') searchTerm: string) {
    return this.airportService.findSuggestionsbycode(searchTerm);
   }

   @Query(returns => [CodeEntity])
   async SuggestionsCountry(@Args('searchTerm') searchTerm: string) {
     return this.airportService.findSuggestionsByCountry(searchTerm);
    }

    @Query(returns => [CodeEntity])
    async SuggestionsState(@Args('searchTerm') searchTerm: string) {
      return this.airportService.findSuggestionsByState(searchTerm);
    }

    @Query(returns => [CodeEntity])
    async Suggestionsname(@Args('searchTerm') searchTerm: string) {
      return this.airportService.findSuggestionsByName(searchTerm);
    }


   

  @Mutation(returns => CodeEntity)
  async createAirport(@Args('input') input: CreateAirportInput) {
    return this.airportService.createAirportorport(input);
  }
  @Mutation(returns=>CodeEntity)
  async associateCoordinates(
    @Args('code') code: string,
    @Args('latitude') latitude: number,
    @Args('longitude') longitude: number,
  ): Promise<CodeEntity | undefined> {
    return this.airportService.associateCoordinates(code, latitude, longitude);
  }

  @Query(returns => CodeEntity) 
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
