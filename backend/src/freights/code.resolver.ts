// airport.resolver.ts

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AirportService } from './code.service';
import { CreateAirportInput } from './code.dto';
import { CodeEntity } from './code.entity';
import { City, Port, OceanFreight, Shipment } from './shipment.model';
import { ShippingMode } from './code.enums';
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

  @Mutation(returns => CodeEntity)
  async updateAirport(@Args('input') input: CreateAirportInput,
  @Args('name') name: string) {
    return this.airportService.updateAirportDetails(name,input);
  }
  @Mutation(returns=>CodeEntity)
  async associateCoordinates(
    @Args('code') code: string,
    @Args('latitude') latitude: number,
    @Args('longitude') longitude: number,
  ): Promise<CodeEntity | undefined> {
    return this.airportService.associateCoordinates(code, latitude, longitude);
  }

  @Mutation(returns=>CodeEntity)
  async associateCoordinatesbyid(
    @Args('id') id:number,
    @Args('latitude') latitude: number,
    @Args('longitude') longitude: number,
  ): Promise<CodeEntity | undefined> {
    return this.airportService.associateCoordinatesbyid(id, latitude, longitude);
  }

  @Query(returns => CodeEntity) 
  async getCoordinatesByCode(@Args('code') code: string): Promise<{ latitude: number; longitude: number } | undefined> {
    return this.airportService.getCoordinatesByCode(code);
  }

  @Query(returns => CodeEntity) 
  async getCoordinatesByName(@Args('name') name: string): Promise<{ latitude: number; longitude: number } | undefined> {
    return this.airportService.findCoordinatesByName(name);
  }
  
  @Query(() => [Shipment])
async getShipmentDetails(
  @Args('fromshipmentMode', { type: () => ShippingMode }) fromshipmentMode: ShippingMode,
  @Args('fromCountry') fromCountry: string,
  @Args('fromstate') fromstate: string,
  @Args('fromname') fromname: string,
  @Args('toshipmentMode', { type: () => ShippingMode }) toshipmentMode: ShippingMode,
  @Args('toCountry') toCountry: string,
  @Args('tostate') tostate: string,
  @Args('toname') toname: string,
  @Args('st20') st20: number,
  @Args('currency') currency: string,
): Promise<Shipment[]> {
  return this.airportService.getShipmentDetails(
    fromshipmentMode,
    fromCountry,
    fromstate,
    fromname,
    toshipmentMode,
    toCountry,
    tostate,
    toname,
    st20,
    currency,
  );
}

}
