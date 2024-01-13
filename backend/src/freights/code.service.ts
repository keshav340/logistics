
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CodeEntity } from './code.entity';
import { CreateAirportInput } from './code.dto';
import { GraphQLClient } from 'graphql-request';
import { Shipment } from './shipment.model';

@Injectable()
export class AirportService {
  constructor(

    @InjectRepository(CodeEntity)
    private readonly codeRepository: Repository<CodeEntity>
    
  ) {}

  async createAirportorport(input: CreateAirportInput): Promise<CodeEntity> {
    const object = this.codeRepository.create(input);
    return this.codeRepository.save(object);
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

  async getCoordinatesByCode(code: string): Promise<{ latitude: number; longitude: number } | undefined> {
    const airport = await this.codeRepository.findOne({ where: { code } });

    if (airport) {
      return { latitude: airport.latitude, longitude: airport.longitude };
    }

    return undefined;
  }


  async getShipmentDetails(
    fromCode: string,
    toCode: string,
    st20: number,
    currency: string,
  ): Promise<Shipment[]> {
    // Fetch coordinates for fromCode and toCode
    const fromCoordinate = await this.getCoordinatesByCode(fromCode);
    const toCoordinate = await this.getCoordinatesByCode(toCode);
    const fromlatitude = fromCoordinate.latitude;
    const fromlongitude = toCoordinate.longitude;
    const fromCoordinates = [fromlatitude, fromlongitude];
    const tolatitude = toCoordinate.latitude;
    const tolongitude = toCoordinate.longitude;
    const toCoordinates = [tolatitude, tolongitude];


    // Implement your FCL query logic here
    const result = await this.queryFCL(fromCode, toCode, st20, currency, fromCoordinates, toCoordinates);
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
