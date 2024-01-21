// airport.resolver.ts

import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { AirportService } from './code.service';
import { CreateAirportInput } from './code.dto';
import { CodeEntity } from './code.entity';
import { City, Port, OceanFreight, Shipment } from './shipment.model';
import { ShippingMode } from './code.enums';
import { Shipmentlcl } from './lclmodel';
import { Shipmentbulk } from './bulkmodel';
import { Shipmentair } from './airmodel';
import { Bookingshipping } from './booking.entity';
import { CreateBookingshippingInput } from './bookingshipping.input';
import { BookingshippingContactinfo } from './bookingcontact.entity';
import { BookingshippingContactinfoInput } from './bookingcontact.input';
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
  @Args('ST20') ST20: number,
  @Args('ST40') ST40: number,
  @Args('REF20') REF20: number,
  @Args('REF40') REF40: number,
  @Args('HQ40') HQ40: number,
  @Args('HQ45') HQ45: number,
  
  @Args('currency') currency: string,
  @Args('date') date: string
): Promise<Shipment[]> {
  return this.airportService.getShipmentDetailsfcl(
    fromshipmentMode,
    fromCountry,
    fromstate,
    fromname,
    toshipmentMode,
    toCountry,
    tostate,
    toname,
    ST20,
    ST40,
    REF20,
    REF40,
    HQ40,
    HQ45,
    currency,
    date
  );
}

@Query(() => [Shipmentlcl])
async getShipmentDetailslcl(
  @Args('fromshipmentMode', { type: () => ShippingMode }) fromshipmentMode: ShippingMode,
  @Args('fromCountry') fromCountry: string,
  @Args('fromstate') fromstate: string,
  @Args('fromname') fromname: string,
  @Args('toshipmentMode', { type: () => ShippingMode }) toshipmentMode: ShippingMode,
  @Args('toCountry') toCountry: string,
  @Args('tostate') tostate: string,
  @Args('toname') toname: string,
  //@Args('st20') st20: number,
  @Args('currency') currency: string,
  @Args('weight', { type: () => Float }) weight: number,
  @Args('volume', { type: () => Float }) volume: number,
  @Args('date') date: string,
): Promise<Shipmentlcl[]> {
  return this.airportService.getShipmentDetailslcl(
    fromshipmentMode,
    fromCountry,
    fromstate,
    fromname,
    toshipmentMode,
    toCountry,
    tostate,
    toname,
    currency,
    weight,
    volume,
    date
  );
}

@Query(() => [Shipmentbulk])
async getShipmentDetailsbulk(
  @Args('fromshipmentMode', { type: () => ShippingMode }) fromshipmentMode: ShippingMode,
  @Args('fromCountry') fromCountry: string,
  @Args('fromstate') fromstate: string,
  @Args('fromname') fromname: string,
  @Args('toshipmentMode', { type: () => ShippingMode }) toshipmentMode: ShippingMode,
  @Args('toCountry') toCountry: string,
  @Args('tostate') tostate: string,
  @Args('toname') toname: string,
  //@Args('st20') st20: number,
  @Args('currency') currency: string,
  @Args('weight', { type: () => Float }) weight: number,
  //@Args('volume', { type: () => Float }) volume: number,
  @Args('date') date: string,
): Promise<Shipmentbulk[]> {
  return this.airportService.getShipmentDetailsbulk(
    fromshipmentMode,
    fromCountry,
    fromstate,
    fromname,
    toshipmentMode,
    toCountry,
    tostate,
    toname,
    currency,
    weight,
    date
  );
}



@Query(() => [Shipmentair])
async getShipmentDetailsair(
  @Args('fromshipmentMode', { type: () => ShippingMode }) fromshipmentMode: ShippingMode,
  @Args('fromCountry') fromCountry: string,
  @Args('fromstate') fromstate: string,
  @Args('fromname') fromname: string,
  @Args('toshipmentMode', { type: () => ShippingMode }) toshipmentMode: ShippingMode,
  @Args('toCountry') toCountry: string,
  @Args('tostate') tostate: string,
  @Args('toname') toname: string,
  //@Args('st20') st20: number,
  @Args('currency') currency: string,
  @Args('weight', { type: () => Float }) weight: number,
  //@Args('volume', { type: () => Float }) volume: number,
  @Args('date') date: string,
): Promise<Shipmentair[]> {
  return this.airportService.getShipmentDetailsair(
    fromshipmentMode,
    fromCountry,
    fromstate,
    fromname,
    toshipmentMode,
    toCountry,
    tostate,
    toname,
    currency,
    weight,
    date
  );
}
@Mutation(() => Bookingshipping)
async createBookingshipping(
  @Args('input') input:CreateBookingshippingInput,
): Promise<Bookingshipping> {
  return this.airportService.createbooking(input)
}


@Query(() => [Bookingshipping])
async bookingshippings(): Promise<Bookingshipping[]> {
  return this.airportService.findAllbooking();
}

@Mutation(()=>BookingshippingContactinfo)
async createbookingcontact(@Args('input') input: BookingshippingContactinfoInput):Promise<BookingshippingContactinfo>{
  return this.airportService.createbookingcontact(input);
}
@Query(()=>BookingshippingContactinfo)
async allcreatebookingcontact():Promise<BookingshippingContactinfo[]>{
  return this.airportService.allcreatebookingcontact();
}

}
