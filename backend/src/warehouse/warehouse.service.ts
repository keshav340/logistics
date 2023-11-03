import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WareHouse } from './warehouse.entity';
import { WarehouseInput } from './dto/warehouse.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
@Injectable()
export class WarehouseService {
    constructor(
    @InjectRepository(WareHouse)
    private warehouseRepository: Repository<WareHouse>,
    @InjectRepository(User)
    private userRepository: Repository<User>

 ){}

 
  
    async getAllWarehouses(): Promise<WareHouse[]> {
        return this.warehouseRepository.find();
      }
      async getWarehouseById(id: number): Promise<WareHouse > {
        return this.warehouseRepository.findOne({where: {id: id}});
      }
      async createWarehouse(input: WarehouseInput): Promise<WareHouse> {
        const user = await this.userRepository.findOne({where: {id: input.userId}});
        //const warehouse = this.warehouseRepository.create(input);
        //const existingWarehouse = await this.warehouseRepository.findOne({
         // where: { companyName: input.companyName },
       // });
        //if (existingWarehouse) {
          //throw new Error('Warehouse with the same company name already exists.');
        //}
      
        const warehouse = new WareHouse();
        warehouse.user = user;
        warehouse.companyName = input.companyName;
        warehouse.Adress = input.Adress;
        warehouse.State = input.State;
        warehouse.City = input.City;
        warehouse.Pincode = input.Pincode;
        warehouse.Country = input.Country;
        warehouse.warehouseType = input.warehouseType;
        warehouse.totalSquareArea = input.totalSquareArea;
        warehouse.totalAvailiableArea = input.totalAvailiableArea;
        warehouse.occupiedSpace = input.occupiedSpace;
        warehouse.unoccupiedSpace = input.unoccupiedSpace;
        warehouse.rackedSpace = input.rackedSpace;
        warehouse.minimumStorageArea = input.minimumStorageArea;
        warehouse.minimumStorageRent = input.minimumStorageRent;
        warehouse.minimumStorageCharges_per_pallet = input.minimumStorageCharges_per_pallet;
        warehouse.storageCharges = input.storageCharges;
        warehouse.storageCharges_per_pallet = input.storageCharges_per_pallet;
        warehouse.hazardousStorageType = input.hazardousStorageType;
        warehouse.temperatureType = input.temperatureType;
        warehouse.temperatureCapacity = input.temperatureCapacity;
       warehouse.minimumstorageArea_per_pallet = input.minimumstorageArea_per_pallet
        return this.warehouseRepository.save(warehouse);
      }
      async deleteWarehouse(id: number): Promise<boolean> {
        const warehouse =  await this.getWarehouseById(id);
        if(!warehouse){
            throw new Error('Warehouse Not found');
        }
        await this.warehouseRepository.delete(id);
        return true;
      }
      async updateWarehouse(id:number,
        input:WarehouseInput):Promise<WareHouse>{
            const warehouse = await this.getWarehouseById(id);
            const user = await this.userRepository.findOne({where:{id:input.userId}});
            if(!warehouse)
            {
                throw new Error('WareHouse Not found');

            }
            warehouse.user = user;
            warehouse.companyName = input.companyName;
            warehouse.Adress = input.Adress;
            warehouse.State = input.State;
            warehouse.City = input.City;
            warehouse.Pincode = input.Pincode;
            warehouse.Country = input.Country;
            warehouse.warehouseType = input.warehouseType;
            warehouse.totalSquareArea = input.totalSquareArea;
            warehouse.totalAvailiableArea = input.totalAvailiableArea;
            warehouse.occupiedSpace = input.occupiedSpace;
            warehouse.unoccupiedSpace = input.unoccupiedSpace;
            warehouse.rackedSpace = input.rackedSpace;
            warehouse.minimumStorageArea = input.minimumStorageArea;
            warehouse.minimumStorageRent = input.minimumStorageRent;
            warehouse.minimumStorageCharges_per_pallet = input.minimumStorageCharges_per_pallet;
            warehouse.storageCharges = input.storageCharges;
            warehouse.storageCharges_per_pallet = input.storageCharges_per_pallet;
            warehouse.hazardousStorageType = input.hazardousStorageType;
            warehouse.temperatureType = input.temperatureType;
            warehouse.temperatureCapacity = input.temperatureCapacity;
            
            return this.warehouseRepository.save(warehouse);
        }
        async getWarehousesByUserId(userId: number): Promise<WareHouse[]> {
          return this.warehouseRepository.find({
            where: { user: { id: userId } }, // Filter by the user's ID
          });
        }
    

}
  