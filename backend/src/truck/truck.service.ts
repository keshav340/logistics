// truck.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TruckEntity } from './truck.entity';
import { TruckDTO } from './truck.dto';
import { User } from 'src/user/user.entity';
@Injectable()
export class TruckService {
  constructor(
    @InjectRepository(TruckEntity)
    private readonly truckRepository: Repository<TruckEntity>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async createTruck(truckData: TruckDTO): Promise<TruckEntity> {
    const user = await this.userRepository.findOne({ where: { id: truckData.userId } });
    console.log(user);
    const truck = new TruckEntity();
    
    truck.companyName = truckData.companyName;
    truck.Adress = truckData.Adress;
    truck.State = truckData.State
    truck.City = truckData.City
    truck.Pincode = truckData.Pincode
    truck.Country = truckData.Country
    truck.transportertype = truckData.transportertype
    truck.vehicletype = truckData.vehicletype
    truck.maxacceptablepayload = truckData.maxacceptablepayload;
    truck.pickupcity = truckData.pickupcity;
    truck.pickupcitypincode = truckData.pickupcitypincode;
    truck.dropcity = truckData.dropcity;
    truck.dropcitypincode = truckData.dropcitypincode;
    truck.transportcharges = truckData.transportcharges;
    truck.user = user;
    


    ///const truck = this.truckRepository.create(truckData);mp
    return await this.truckRepository.save(truck);
  }

  async getTruckById(id: number): Promise<TruckEntity | null> {
    return this.truckRepository.findOne({where:{id: id}});
  }

  async updateTruck(id: number, truckData: TruckDTO): Promise<TruckEntity | null> {
    await this.truckRepository.update(id, truckData);
    return this.getTruckById(id);
  }

  async deleteTruck(id: number): Promise<boolean> {
    const result = await this.truckRepository.delete(id);
    return result.affected > 0;
  }

  async getAllTrucks(): Promise<TruckEntity[]> {
    return this.truckRepository.find();
  }
  async getTrucksByUserId(userId: number): Promise<TruckEntity[]> {
    return this.truckRepository.find({
      where: { user: { id: userId } }, 
    });
  }
}

