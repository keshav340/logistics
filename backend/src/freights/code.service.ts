
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CodeEntity } from './code.entity';
import { CreateAirportInput } from './code.dto';
import { GraphQLClient } from 'graphql-request';
import { Shipment } from './shipment.model';
import { ShippingMode } from './code.enums';
import { Float } from '@nestjs/graphql';
import { Shipmentlcl } from './lclmodel';
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

  
  


  async getShipmentDetailsfcl(
    fromshipmentMode:ShippingMode,
    fromCountry:string,
    fromstate:string,
    fromname:string,
    toshipmentMode:ShippingMode,
    toCountry:string,
    tostate:string,
    toname:string,
    ST20: number,
    ST40: number,
    REF20: number,
    REF40: number,
    HQ40: number,
    HQ45: number,
    currency: string,
    data:string
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
    //const result = await this.queryFCL(fromname, toname, st20, currency, fromCoordinates, toCoordinates);
    return [
      {
        "shipmentId": "19797076",
        "cityFrom": {
          "name": "Shanghai Shi, Pudong Xinqu, Ma Ji Lu",
          "countryCode": "CN"
        },
        "cityTo": {
          "name": "Loop Fwy, Houston, TX 77012, USA",
          "countryCode": "US"
        },
        "portFrom": {
          "name": "Shanghai",
          "code": "CNSHA",
          "countryCode": "CN"
        },
        "portTo": {
          "name": "Houston",
          "code": "USHOU",
          "countryCode": "US"
        },
        "freight": [
          {
            "price": 4213,
            "transitTime": "41 days",
            "shippingLine": "Maersk"
          }
        ]
      },
      {
        "shipmentId": "19797077",
        "cityFrom": {
          "name": "Shanghai Shi, Pudong Xinqu, Ma Ji Lu",
          "countryCode": "CN"
        },
        "cityTo": {
          "name": "Loop Fwy, Houston, TX 77012, USA",
          "countryCode": "US"
        },
        "portFrom": {
          "name": "Shanghai",
          "code": "CNSHA",
          "countryCode": "CN"
        },
        "portTo": {
          "name": "Houston",
          "code": "USHOU",
          "countryCode": "US"
        },
        "freight": [
          {
            "price": 7409,
            "transitTime": "28 days",
            "shippingLine": "Chinese line"
          }
        ]
      },
      {
        "shipmentId": "19797078",
        "cityFrom": {
          "name": "Shanghai Shi, Pudong Xinqu, Ma Ji Lu",
          "countryCode": "CN"
        },
        "cityTo": {
          "name": "Loop Fwy, Houston, TX 77012, USA",
          "countryCode": "US"
        },
        "portFrom": {
          "name": "Shanghai",
          "code": "CNSHA",
          "countryCode": "CN"
        },
        "portTo": {
          "name": "Houston",
          "code": "USHOU",
          "countryCode": "US"
        },
        "freight": [
          {
            "price": 4950,
            "transitTime": "36 days",
            "shippingLine": "MSC"
          }
        ]
      },
      {
        "shipmentId": "19797079",
        "cityFrom": {
          "name": "Shanghai Shi, Pudong Xinqu, Ma Ji Lu",
          "countryCode": "CN"
        },
        "cityTo": {
          "name": "Loop Fwy, Houston, TX 77012, USA",
          "countryCode": "US"
        },
        "portFrom": {
          "name": "Zhangjiagang",
          "code": "CNZJG",
          "countryCode": "CN"
        },
        "portTo": {
          "name": "Memphis",
          "code": "USMEM",
          "countryCode": "US"
        },
        "freight": [
          {
            "price": 11723,
            "transitTime": "34 days",
            "shippingLine": "MSC"
          }
        ]
      },
      {
        "shipmentId": "19797080",
        "cityFrom": {
          "name": "Shanghai Shi, Pudong Xinqu, Ma Ji Lu",
          "countryCode": "CN"
        },
        "cityTo": {
          "name": "Loop Fwy, Houston, TX 77012, USA",
          "countryCode": "US"
        },
        "portFrom": {
          "name": "Zhangjiagang",
          "code": "CNZJG",
          "countryCode": "CN"
        },
        "portTo": {
          "name": "Memphis",
          "code": "USMEM",
          "countryCode": "US"
        },
        "freight": [
          {
            "price": 11666,
            "transitTime": "40 days",
            "shippingLine": "CMA CGM"
          }
        ]
      },
    

      // Add more shipments if needed
    ];;
  }


  async getShipmentDetailslcl(
    fromshipmentMode: ShippingMode,
    fromCountry: string,
    fromstate: string,
    fromname: string,
    toshipmentMode: ShippingMode,
    toCountry: string,
    tostate: string,
    toname: string,
    currency: string,
    weight: number,
    volume: number,
    date : string
  ): Promise<Shipmentlcl[]> {
    // Fetch coordinates for fromCode and toCode
    const fromCoordinate = await this.findCoordinatesByName(fromname);
    const toCoordinate = await this.findCoordinatesByName(toname);
    const fromlatitude = fromCoordinate.latitude;
    const fromlongitude = toCoordinate.longitude;
    const fromCoordinates = [fromlatitude, fromlongitude];
    const tolatitude = toCoordinate.latitude;
    const tolongitude = toCoordinate.longitude;
    const toCoordinates = [tolatitude, tolongitude];

    
    return [
      {
        "shipmentId": "19803096",
        "transportationMode": "ocean",
        "currency": "USD",
        "cityFrom": {
          "id": 190621,
          "name": "Odesa, Odessa Oblast, Ukraine, 65000",
          "code": "145036",
          "countryCode": "UA",
          "lat": 46.482526,
          "lng": 30.7233095
        },
        "cityTo": {
          "id": 132367,
          "name": "Shanghai, China",
          "code": "120740",
          "countryCode": "CN",
          "lat": 31.2303904,
          "lng": 121.4737021
        },
        "portFrom": {
          "id": 23268,
          "name": "Warszawa",
          "code": "PLWAS",
          "countryCode": "PL",
          "lat": 52.2513888889,
          "lng": 21.0322222222
        },
        "portTo": {
          "id": 706,
          "name": "Shanghai",
          "code": "CNSHA",
          "countryCode": "CN",
          "lat": 31.400090576935703,
          "lng": 121.49711250347931
        },
        "oceanFreight": {
          "shippingLine": null,
          "logo": "https://www.searates.com/design/images/freight/sealine/0.jpg",
          "price": 500,
          "distance": "20929.25 km",
          "comment": null,
          "originalPrice": 500,
          "originalCurrency": "USD",
          "overdue": false,
          "co2": 230222,
          "transitTime": "41 days",
          "portFeesFrom": [
            {
              "abbr": "OTHC",
              "title": "Original Terminal Handling Charge",
              "text": "This service covers the cost of handling a container at the origin port or terminal. This service is applicable to all shipments.",
              "originalPrice": 1100,
              "originalCurrency": "USD",
              "price": 1100,
              "perLot": false
            },
            {
              "abbr": "EXP",
              "title": "Export service",
              "text": null,
              "originalPrice": 275,
              "originalCurrency": "USD",
              "price": 275,
              "perLot": false
            }
          ],
          "portFeesTo": [
            {
              "abbr": "DTHC",
              "title": "Destination Terminal Handling Charge",
              "text": "This service covers the cost of the handling of a container at the destination port or terminal. This service is applicable to all shipments.",
              "originalPrice": 1300,
              "originalCurrency": "USD",
              "price": 1300,
              "perLot": false
            },
            {
              "abbr": "IMP",
              "title": "Import service",
              "text": null,
              "originalPrice": 275,
              "originalCurrency": "USD",
              "price": 275,
              "perLot": false
            }
          ],
          "truckFrom": {
            "price": 5456,
            "distance": "1078.32 km",
            "transitTime": "2 days",
            "originalPrice": 5456,
            "originalCurrency": "USD",
            "interpolation": true
          },
          "truckTo": {
            "price": 162,
            "distance": "18.95 km",
            "originalPrice": 162,
            "originalCurrency": "USD",
            "transitTime": "1 day",
            "interpolation": false
          }
        }
      },
    ]
     
  
  // ... existing code ...
}
}
  
  


