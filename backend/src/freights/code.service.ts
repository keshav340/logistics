
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
import { Shipmentbulk } from './bulkmodel';
import {Shipmentair} from './airmodel'
import { Bookingshipping } from './booking.entity';
import { CreateBookingshippingInput } from './bookingshipping.input';
import { BookingshippingContactinfoInput } from './bookingcontact.input';
import { BookingshippingContactinfo } from './bookingcontact.entity';
@Injectable()
export class AirportService {
  constructor(
    @InjectRepository(BookingshippingContactinfo)
    private readonly bookingshippingcontactrepository:Repository<BookingshippingContactinfo>,

    @InjectRepository(CodeEntity)
    private readonly codeRepository: Repository<CodeEntity>,
    @InjectRepository(Bookingshipping)
    private readonly bookingshippingRepository: Repository<Bookingshipping>
    
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
     
}


async getShipmentDetailsbulk(
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
  date : string
): Promise<Shipmentbulk[]> {
  // Fetch coordinates for fromCode and toCode
  const fromCoordinate = await this.findCoordinatesByName(fromname);
  const toCoordinate = await this.findCoordinatesByName(toname);
  const fromlatitude = fromCoordinate.latitude;
  const fromlongitude = toCoordinate.longitude;
  const fromCoordinates = [fromlatitude, fromlongitude];
  const tolatitude = toCoordinate.latitude;
  const tolongitude = toCoordinate.longitude;
  const toCoordinates = [tolatitude, tolongitude];

  
  return  [
    {
      "shipmentId": "19943518",
      "transportationMode": "ocean",
      "currency": "USD",
      "cityFrom": {
        "id": 123767,
        "name": "Chornomorsk, Odessa Oblast, Ukraine, 68000",
        "code": "ChIJd-c0sBXJx0ARbhq6cu6LjPk",
        "countryCode": "UA",
        "lat": 46.2952236,
        "lng": 30.6480855
      },
      "cityTo": {
        "id": 121106,
        "name": "Wenzhou, Zhejiang, China",
        "code": "ChIJsbCLCTDyRTQRHFq0WBMcNbI",
        "countryCode": "CN",
        "lat": 27.993828,
        "lng": 120.699361
      },
      "portFrom": {
        "id": 409,
        "name": "Chornomorsk",
        "code": "UAILK",
        "countryCode": "UA",
        "lat": 46.337529876646,
        "lng": 30.677839053341877
      },
      "portTo": {
        "id": 766,
        "name": "Wenzhou",
        "code": "CNWNZ",
        "countryCode": "CN",
        "lat": 28.035151778552024,
        "lng": 120.66563259467864
      },
      "oceanFreight": {
        "shippingLine": null,
        "logo": "https://www.searates.com/design/images/freight/sealine/0.jpg",
        "price": 475000,
        "comment": null,
        "distance": "14663.14 km",
        "originalPrice": 475000,
        "originalCurrency": "USD",
        "transitTime": "30 days",
        "validTo": "2024-01-29",
        "co2": 3225890800,
        "overdue": false,
        "railFrom": {
          "price": 8052.75,
          "distance": "5.37 km",
          "transitTime": "1",
          "interpolation": true
        },
        "railTo": {
          "price": 8137.5,
          "distance": "6.5 km",
          "transitTime": "1",
          "interpolation": true
        }
      }
    },
    {
      "shipmentId": "19943519",
      "transportationMode": "ocean",
      "currency": "USD",
      "cityFrom": {
        "id": 123767,
        "name": "Chornomorsk, Odessa Oblast, Ukraine, 68000",
        "code": "ChIJd-c0sBXJx0ARbhq6cu6LjPk",
        "countryCode": "UA",
        "lat": 46.2952236,
        "lng": 30.6480855
      },
      "cityTo": {
        "id": 121106,
        "name": "Wenzhou, Zhejiang, China",
        "code": "ChIJsbCLCTDyRTQRHFq0WBMcNbI",
        "countryCode": "CN",
        "lat": 27.993828,
        "lng": 120.699361
      },
      "portFrom": {
        "id": 304,
        "name": "Odesa",
        "code": "UAODS",
        "countryCode": "UA",
        "lat": 46.49999958643309,
        "lng": 30.730773019409476
      },
      "portTo": {
        "id": 766,
        "name": "Wenzhou",
        "code": "CNWNZ",
        "countryCode": "CN",
        "lat": 28.035151778552024,
        "lng": 120.66563259467864
      },
      "oceanFreight": {
        "shippingLine": null,
        "logo": "https://www.searates.com/design/images/freight/sealine/0.jpg",
        "price": 475000,
        "comment": null,
        "distance": "14792.14 km",
        "originalPrice": 475000,
        "originalCurrency": "USD",
        "transitTime": "30 days",
        "validTo": "2024-01-29",
        "co2": 3254270800,
        "overdue": false,
        "railFrom": {
          "price": 9808.5,
          "distance": "28.78 km",
          "transitTime": "1",
          "interpolation": true
        },
        "railTo": {
          "price": 8137.5,
          "distance": "6.5 km",
          "transitTime": "1",
          "interpolation": true
        }
      }
    }
  ]
   
}

async getShipmentDetailsair(
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
  date : string
): Promise<Shipmentair[]> {
  // Fetch coordinates for fromCode and toCode
  const fromCoordinate = await this.findCoordinatesByName(fromname);
  const toCoordinate = await this.findCoordinatesByName(toname);
  const fromlatitude = fromCoordinate.latitude;
  const fromlongitude = toCoordinate.longitude;
  const fromCoordinates = [fromlatitude, fromlongitude];
  const tolatitude = toCoordinate.latitude;
  const tolongitude = toCoordinate.longitude;
  const toCoordinates = [tolatitude, tolongitude];

  
  return  [
    {
      "shipmentId": "19945303",
      "transportationMode": "air",
      "currency": "USD",
      "cityFrom": {
        "id": 132367,
        "name": "Shanghai, China",
        "code": "120740",
        "countryCode": "CN",
        "lat": 31.2303904,
        "lng": 121.4737021
      },
      "cityTo": {
        "id": 190621,
        "name": "Odesa, Odessa Oblast, Ukraine, 65000",
        "code": "145036",
        "countryCode": "UA",
        "lat": 46.482526,
        "lng": 30.7233095
      },
      "portFrom": {
        "id": 3406,
        "name": "Pudong",
        "code": "PVG",
        "countryCode": "CN",
        "lat": 31.143378,
        "lng": 121.805214
      },
      "portTo": {
        "id": 1657,
        "name": "Henri Coanda",
        "code": "OTP",
        "countryCode": "RO",
        "lat": 44.572161,
        "lng": 26.102178
      },
      "airFreight": {
        "shippingLine": "Lufthansa",
        "logo": "https://www.searates.com/design/images/airlines/37.jpg",
        "price": 295.52,
        "originalPrice": 295.52,
        "originalCurrency": "USD",
        "distance": "8050.49 km",
        "transitTime": "1 days",
        "validTo": "2023-12-31",
        "overdue": true,
        "portFeesFrom": [
          {
            "abbr": "OTHC",
            "title": "Original Terminal Handling Charge",
            "originalPrice": 22.5,
            "originalCurrency": "USD",
            "text": "This service covers the cost of handling a container at the origin port or terminal. This service is applicable to all shipments.",
            "price": 22.5,
            "perLot": false
          },
          {
            "abbr": "EXP",
            "title": "Export service",
            "originalPrice": 175,
            "originalCurrency": "USD",
            "text": null,
            "price": 175,
            "perLot": false
          }
        ],
        "portFeesTo": [
          {
            "abbr": "DTHC",
            "title": "Destination Terminal Handling Charge",
            "originalPrice": 22.5,
            "originalCurrency": "USD",
            "text": "This service covers the cost of the handling of a container at the destination port or terminal. This service is applicable to all shipments.",
            "price": 22.5,
            "perLot": false
          },
          {
            "abbr": "IMP",
            "title": "Import service",
            "originalPrice": 175,
            "originalCurrency": "USD",
            "text": null,
            "price": 175,
            "perLot": false
          }
        ],
        "truckFrom": {
          "price": 767,
          "distance": "32.98 km",
          "transitTime": "1 day",
          "originalPrice": 767,
          "originalCurrency": "USD",
          "interpolation": true
        },
        "truckTo": {
          "price": 250.72,
          "distance": "417.86 km",
          "originalPrice": 250.72,
          "originalCurrency": "USD",
          "transitTime": "1 days",
          "interpolation": true
        }
      }
    },
  ]
}

async createbooking(input: CreateBookingshippingInput): Promise<Bookingshipping> {
  const booking = this.bookingshippingRepository.create(input);
  return await this.bookingshippingRepository.save(booking);
}

async findAllbooking(): Promise<Bookingshipping[]> {
  return await this.bookingshippingRepository.find();
}

async createbookingcontact(input:BookingshippingContactinfoInput):Promise<BookingshippingContactinfo>{
   const contactbooking = this.bookingshippingcontactrepository.create(input);
   return await this.bookingshippingcontactrepository.save(contactbooking);
}
 
async allcreatebookingcontact(): Promise<BookingshippingContactinfo[]>{
  return await this.bookingshippingcontactrepository.find();
}

}
  
  


