
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CodeEntity } from './code.entity';
import { CreateAirportInput } from './code.dto';
import { GraphQLClient } from 'graphql-request';
import { Shipment } from './shipment.model';
import { ShippingMode } from './code.enums';

@Injectable()
export class AirportService {
  constructor(

    @InjectRepository(CodeEntity)
    private readonly codeRepository: Repository<CodeEntity>
    
  ) {}

  async createAirportorport(input: CreateAirportInput): Promise<CodeEntity> {
    
    const object = this.codeRepository.create(input);
    const existingAirport = await this.codeRepository.findOne({ where: { name: input.name} });

    if (existingAirport) {
     
      throw new Error(` already exists`);
    }
    return this.codeRepository.save(object);
  }

  async updateAirportDetails(name: string, input: CreateAirportInput): Promise<CodeEntity | undefined> {
    const airport = await this.codeRepository.findOne({ where: { name } });
  
    if (airport) {
      // Update the airport details with the new input
      airport.code = input.code;
      airport.name = input.name;
      airport.Country = input.Country;
      airport.State = input.State;
      airport.shippingMode = input.ShipmentMode
      // Save the updated airport object
      return this.codeRepository.save(airport);
    }
  
    return airport // Return undefined if the airport with the given code is not found
  }
  
  async findSuggestionsbycode(searchTerm: string): Promise<CodeEntity[]> {
    // Adjust the query to filter results based on the partial input
    return this.codeRepository
      .createQueryBuilder('code')
      .where('code.code ILIKE :searchTerm', { searchTerm: `%${searchTerm}%` })
      .getMany();
  }

  async findSuggestionsByCountry(country: string): Promise<CodeEntity[]> {
    return this.codeRepository
      .createQueryBuilder('code')
      .where('code.Country ILIKE :country', { country: `%${country}%` })
      .getMany();
  }

  async findSuggestionsByState(state: string): Promise<CodeEntity[]> {
    return this.codeRepository
     .createQueryBuilder('code')
     .where('code.State ILIKE :state', { state: `%${state}%` })
     .getMany();
  }

  async findSuggestionsByName(name: string): Promise<CodeEntity[]> {
    return this.codeRepository
    .createQueryBuilder('code')
    .where('code.Name ILIKE :name', { name: `%${name}%` })
    .getMany();
  }

  
  
  
  
  async associateCoordinates(code: string, latitude: number, longitude: number): Promise<CodeEntity | undefined> {
    const airport = await this.codeRepository.findOne({where:{code}});

    if (airport) {
      airport.latitude = latitude;
      airport.longitude = longitude;
      return this.codeRepository.save(airport);
    }

    return undefined;
  }
  async associateCoordinatesbyid(id:number, latitude: number, longitude: number): Promise<CodeEntity | undefined> {
    const airport = await this.codeRepository.findOne({where:{id:id}});
    console.log(airport)

    if (airport) {
      airport.latitude = latitude;
      airport.longitude = longitude;
      return this.codeRepository.save(airport);
    }

    return airport;
  }

  async getCoordinatesByCode(code: string): Promise<{ latitude: number; longitude: number } | undefined> {
    const airport = await this.codeRepository.findOne({ where: { code } });

    if (airport) {
      return { latitude: airport.latitude, longitude: airport.longitude };
    }

    return undefined;
  }

  async findCoordinatesByName(name: string): Promise<{ latitude: number; longitude: number } | undefined> {
    const airport = await this.codeRepository.findOne({ where: { name } });

    if (airport) {
      return { latitude: airport.latitude, longitude: airport.longitude };
    }

    return undefined;
  }

  

  


  async getShipmentDetails(
    fromshipmentMode:ShippingMode,
    fromCountry:string,
    fromstate:string,
    fromname:string,
    toshipmentMode:ShippingMode,
    toCountry:string,
    tostate:string,
    toname:string,
    st20: number,
    currency: string,
  ): Promise<Shipment[]> {
    // Fetch coordinates for fromCode and toCode
    const fromCoordinate = await this.findCoordinatesByName(fromname);
    const toCoordinate = await this.findCoordinatesByName(toname);
    const fromlatitude = fromCoordinate.latitude;
    const fromlongitude = toCoordinate.longitude;
    const fromCoordinates = [fromlatitude, fromlongitude];
    const tolatitude = toCoordinate.latitude;
    const tolongitude = toCoordinate.longitude;
    const toCoordinates = [tolatitude, tolongitude];


    // Implement your FCL query logic here
    const result = await this.queryFCL(fromname, toname, st20, currency, fromCoordinates, toCoordinates);
    return result;
  }
  private async queryFCL(
    fromCode: string,
    toCode: string,
    st20: number,
    currency: string,
    fromCoordinates: number[] | undefined,
    toCoordinates: number[] | undefined,
  ): Promise<Shipment[]> {
    
    return [
      {
        shipmentId: '17714472',
        cityFrom: { name: 'Shanghai Shi, Pudong Xinqu, Ma Ji Lu', countryCode: 'CN' },
        cityTo: { name: 'Loop Fwy, Houston, TX 77012, USA', countryCode: 'US' },
        portFrom: { name: 'Shanghai', code: 'CNSHA', countryCode: 'CN' },
        portTo: { name: 'Houston', code: 'USHOU', countryCode: 'US' },
        
        freight: [{ price: 2959, transitTime: '32 days', shippingLine: 'COSCO' }],
      },
      // Add more shipments if needed
    ];
  }

  
  

  
  

}
