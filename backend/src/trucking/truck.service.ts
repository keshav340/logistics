import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trucking } from './truck.entity';
import { truckInput } from './dto/truck.dto';


@Injectable()
export class TruckService {
    constructor(
    @InjectRepository(Trucking)
    private truckRepository: Repository<Trucking>){}

 
  
    async getAlltrucks(): Promise<Trucking[]> {
        return this.truckRepository.find();
      }
      async gettruckById(id: number): Promise<Trucking > {
        return this.truckRepository.findOne({where: {id: id}});
      }
      async createtruck(input: truckInput): Promise<Trucking> {
        const truck = this.truckRepository.create(input);
        return this.truckRepository.save(truck);
      }
      async deletetruck(id: number): Promise<boolean> {
        const truck =  await this.gettruckById(id);
        if(!truck){
            throw new Error('truck Not found');
        }
        await this.truckRepository.delete(id);
        return true;
      }
      async updatetruck(id:number,
        truckInput:truckInput):Promise<Trucking>{
            const truck = await this.gettruckById(id);
            if(!truck)
            {
                throw new Error('truck Not found');

            }
            Object.assign(truck,truckInput);
            return this.truckRepository.save(truck);
        }
    

}
  