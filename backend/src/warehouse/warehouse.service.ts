import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WareHouse } from './warehouse.entity';
import { WarehouseInput } from './dto/warehouse.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { warehouseApproval } from 'src/enums/warehouse_approval.enums';
import { warehouseType } from 'src/enums/warehouse.enums';
import { ApprovedWarehouseInput } from './dto/warehouseapproval.input';
import { temperatureCapacity } from '../enums/temperaturecapacity.enums';
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
        console.log(user);
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
       warehouse.WarehouseApproval = warehouseApproval.Warehouse_Approval_pending;
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
     async approveWarehouse(userId:number,warehouseid:number,approvedinput:ApprovedWarehouseInput):Promise<WareHouse>{
       try{
        const user = await this.userRepository.findOne({where:{id: userId}});
        if(!user){
          throw new Error("User Not Found");
       }
       const warehouse = await this.warehouseRepository.findOne({
        where: { id: warehouseid, WarehouseApproval: warehouseApproval.Warehouse_Approval_pending,  },
      });
      warehouse.companyName = approvedinput.companyname
      warehouse.Adress = approvedinput.Adress
      warehouse.State = approvedinput.State
      warehouse.City = approvedinput.city
      warehouse.Pincode = approvedinput.pincode
      warehouse.Country = approvedinput.country
      warehouse.warehouseType = approvedinput.WarehouseType
      warehouse.totalSquareArea = approvedinput.totalsquareArea
      warehouse.totalAvailiableArea = approvedinput.totalavailiableareas
      warehouse.occupiedSpace = approvedinput.occupied_spaces
      warehouse.unoccupiedSpace = approvedinput.unoccupied_spaces
      warehouse.rackedSpace = approvedinput.racked_spaces
      warehouse.minimumStorageRent = approvedinput.minimumstoragerent
      warehouse.minimumStorageCharges_per_pallet=approvedinput.minimum_storages_charges_per_pallet
      warehouse.minimumStorageArea = approvedinput.minimum_storage_Area
      warehouse.minimumstorageArea_per_pallet = approvedinput.minimum_storage_area_per_pallet
      warehouse.storageCharges = approvedinput.storage_charges
      warehouse.storageCharges_per_pallet  = approvedinput.storage_charges_per_pallet
      warehouse.hazardousStorageType = approvedinput.HazardousStorageType
      warehouse.temperatureType = approvedinput.TempaeratureType
      warehouse.temperatureCapacity = approvedinput.TemperatureCapacity
      warehouse.remarks = approvedinput.remarks;
      warehouse.WarehouseApproval = warehouseApproval.Warehouse_Approved;
      await this.warehouseRepository.save(warehouse);

      return warehouse;
      

     } catch (error) {
      throw new Error('Failed to approve warehouse: ' + error.message);
    }
  }
  async sendforreveiwingWarehouse(userid:number,warehouseid:number):Promise<WareHouse>{
    const user = await this.userRepository.findOne({where:{id: userid}})
    if(!user)
    {
      throw new Error("User not found")
    }

    const warehouse = await this.warehouseRepository.findOne({where:{id:warehouseid}});
    if(!warehouse)
    {
      throw new Error("Warehouse not found")

    }
    warehouse.WarehouseApproval = warehouseApproval.Warehouse_Reveiw_peding;
    return warehouse;
  }
  async warehousereject(userid:number,warehouseid:number,remarks:string):Promise<WareHouse>{
    const user = await this.userRepository.findOne({where:{id:userid}})
    if(!user)
    {
      throw new Error("User not found");
    }
    const warehouse = await this.warehouseRepository.findOne({where:{id:warehouseid,WarehouseApproval:warehouseApproval.Warehouse_Approval_pending}});
    if(!warehouse)
    {
      throw new Error("Warehouse not found");

    }
    warehouse.WarehouseApproval = warehouseApproval.Warehouse_Rejected;
    warehouse.remarks = remarks;
    await this.warehouseRepository.save(warehouse);
    return warehouse;
  }
  
  async reveiwwarehousereject(userid:number,warehouseid:number,remarks:string):Promise<WareHouse>{
    const user = await this.userRepository.findOne({where:{id:userid}})
    if(!user)
    {
      throw new Error("User not found");
    }
    const warehouse = await this.warehouseRepository.findOne({where:{id:warehouseid,WarehouseApproval:warehouseApproval.Warehouse_Reveiw_peding}});
    if(!warehouse)
    {
      throw new Error("Warehouse not found");

    }
    warehouse.WarehouseApproval = warehouseApproval.Warehouse_Rejected;
    warehouse.remarks = remarks;
    await this.warehouseRepository.save(warehouse);
    return warehouse;
  }
  async reveiwwarehouseapproved(userid:number,warehouseid:number,approvedinput:ApprovedWarehouseInput):Promise<WareHouse>{
    const user = await this.userRepository.findOne({where:{id:userid}});
    if(!user)
    {
       throw new Error("User not found");
    }
    const warehouse = await this.warehouseRepository.findOne({where:{id:warehouseid,WarehouseApproval:warehouseApproval.Warehouse_Reveiw_peding}})
    if(!warehouse)
    {
      throw new Error("Warehouse not found");
    }
      warehouse.companyName = approvedinput.companyname
      warehouse.Adress = approvedinput.Adress
      warehouse.State = approvedinput.State
      warehouse.City = approvedinput.city
      warehouse.Pincode = approvedinput.pincode
      warehouse.Country = approvedinput.country
      warehouse.warehouseType = approvedinput.WarehouseType
      warehouse.totalSquareArea = approvedinput.totalsquareArea
      warehouse.totalAvailiableArea = approvedinput.totalavailiableareas
      warehouse.occupiedSpace = approvedinput.occupied_spaces
      warehouse.unoccupiedSpace = approvedinput.unoccupied_spaces
      warehouse.rackedSpace = approvedinput.racked_spaces
      warehouse.minimumStorageRent = approvedinput.minimumstoragerent
      warehouse.minimumStorageCharges_per_pallet=approvedinput.minimum_storages_charges_per_pallet
      warehouse.minimumStorageArea = approvedinput.minimum_storage_Area
      warehouse.minimumstorageArea_per_pallet = approvedinput.minimum_storage_area_per_pallet
      warehouse.storageCharges = approvedinput.storage_charges
      warehouse.storageCharges_per_pallet  = approvedinput.storage_charges_per_pallet
      warehouse.hazardousStorageType = approvedinput.HazardousStorageType
      warehouse.temperatureType = approvedinput.TempaeratureType
      warehouse.temperatureCapacity = approvedinput.TemperatureCapacity
      warehouse.remarks = approvedinput.remarks;
      warehouse.WarehouseApproval = warehouseApproval.Warehouse_Approved;
      await this.warehouseRepository.save(warehouse);
      return warehouse;


  }
  
       
      }
    


  