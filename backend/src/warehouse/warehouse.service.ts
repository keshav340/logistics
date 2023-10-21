import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WareHouse } from './warehouse.entity';
import { WarehouseInput } from './dto/warehouse.dto';
import { User } from 'src/user/user.entity';
@Injectable()
export class WarehouseService {
    constructor(
    @InjectRepository(WareHouse)
    private warehouseRepository: Repository<WareHouse>){}

 
  
    async getAllWarehouses(): Promise<WareHouse[]> {
        return this.warehouseRepository.find();
      }
      async getWarehouseById(id: number): Promise<WareHouse > {
        return this.warehouseRepository.findOne({where: {id: id}});
      }
      async createWarehouse(input: WarehouseInput): Promise<WareHouse> {
        const warehouse = this.warehouseRepository.create(input);
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
        warehouseInput:WarehouseInput):Promise<WareHouse>{
            const warehouse = await this.getWarehouseById(id);
            if(!warehouse)
            {
                throw new Error('WareHouse Not found');

            }
            Object.assign(warehouse,warehouseInput);
            return this.warehouseRepository.save(warehouse);
        }
    

}
  