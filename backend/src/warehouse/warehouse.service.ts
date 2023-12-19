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
import { ID } from '@nestjs/graphql';
import { constants } from 'fs/promises';
const sgMail = require('@sendgrid/mail')
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
const crypto = require('crypto');
@Injectable()
export class WarehouseService {
    constructor(
      private readonly configService: ConfigService,
    @InjectRepository(WareHouse)
    private warehouseRepository: Repository<WareHouse>,
    @InjectRepository(User)
    private userRepository: Repository<User>

 ){}

 
  
 async getAllWarehouses(): Promise<WareHouse[]> {
  return this.warehouseRepository.find({ relations: ['user'] });
}

async getWarehouseById(id: number): Promise<WareHouse> {
  return this.warehouseRepository.findOne({ where: { id: id }, relations: ['user'] });
}

      async createWarehouse(input: WarehouseInput): Promise<WareHouse> {
        const existingWarehouse = await this.warehouseRepository.findOne({
          where: {
            companyName: input.companyName,
            Adress: input.Adress,
            State: input.State,
            City: input.City,
            Pincode: input.Pincode,
            Country: input.Country,
            warehouseType: input.warehouseType,
            totalSquareArea: input.totalSquareArea,
            totalAvailiableArea: input.totalAvailiableArea,
            occupiedSpace: input.occupiedSpace,
            unoccupiedSpace: input.unoccupiedSpace,
            rackedSpace: input.rackedSpace,
            minimumStorageArea: input.minimumStorageArea,
            minimumStorageRent: input.minimumStorageRent,
            minimumStorageCharges_per_pallet: input.minimumStorageCharges_per_pallet,
            storageCharges: input.storageCharges,
            storageCharges_per_pallet: input.storageCharges_per_pallet,
            hazardousStorageType: input.hazardousStorageType,
            temperatureType: input.temperatureType,
            temperatureCapacity: input.temperatureCapacity,
            minimumstorageArea_per_pallet: input.minimumstorageArea_per_pallet,
          },
        });
        if(existingWarehouse){
          throw new Error("Warehouse already exists");
        }


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
       warehouse.WarehouseApproval = warehouseApproval.Warehouse_Approval_pending
       warehouse.latitude = input.latitude
       warehouse.longitude = input.longitude
       const savedWarehouse = await this.warehouseRepository.save(warehouse);
       
       savedWarehouse.uniqueid = `FR-WH-${savedWarehouse.id.toString().padStart(5, '0')}`;
        return this.warehouseRepository.save(savedWarehouse);
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
            warehouse.latitude = input.latitude
            warehouse.longitude = input.longitude

            
            return this.warehouseRepository.save(warehouse);
        }
        async getWarehousesByUserId(userId: number): Promise<WareHouse[]> {
          return this.warehouseRepository.find({
            where: { user: { id: userId } },
             // Filter by the user's ID
          });
        }
     async approveWarehouse(warehouseid:number,approvedinput:ApprovedWarehouseInput):Promise<WareHouse>{
       try{
        
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
      warehouse.latitude = approvedinput.latitude
      warehouse.longitude = approvedinput.longitude
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
    await this.warehouseRepository.save(warehouse);
    return warehouse;
  }
  async warehousereject(warehouseid:number,remarks:string):Promise<WareHouse>{
  
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
  async getRejectedWarehouseList(): Promise<WareHouse[]> {
    return this.warehouseRepository.find({
      where: { WarehouseApproval: warehouseApproval.Warehouse_Rejected },
      relations: ['user'],
    });
  }
  
  // private async generateUniqueId(): Promise<string> {
  //   const existingWarehousesCount = await this.warehouseRepository.count();
  //   const uniqueId = `FR-WH-${(existingWarehousesCount + 1).toString().padStart(5, '0')}`;

  //   return uniqueId;
  // }
  async getWarehousePendingForApprovalListbyuserid(userId: number): Promise<WareHouse[]> {
    return this.warehouseRepository.find({
      where: { 
        WarehouseApproval: warehouseApproval.Warehouse_Approval_pending,
        user: { id: userId }, // Filter by user ID
      },
      relations: ['user'],
    });

    
  }
  async  getWarehouseApprovedListbyuserid(userId:number): Promise<WareHouse[]>{
    return this.warehouseRepository.find({
      where: { 
        WarehouseApproval: warehouseApproval.Warehouse_Approved,
        user: { id: userId }, 
      },
      relations: ['user'],
    });
  
       
      }

      async getWarehouseApprovedList(): Promise<WareHouse[]>{
        return this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
          relations: ['user'],
        });

      }
      async getWarehouseReveiwedListbyuserid(userid:number): Promise<WareHouse[]>{
        return this.warehouseRepository.find({
          where: { 
            WarehouseApproval: warehouseApproval.Warehouse_Reveiw_peding,
            user: { id: userid }, 
          },
          relations: ['user'],
        });
      

      }
      async getWarehousereveiwedlist(): Promise<WareHouse[]>{
        return this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Reveiw_peding },
          relations: ['user'],
        });
   
      }
      async totalsquareAreaAvailiable():Promise<string[]>{
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.map((warehouse) => warehouse.totalSquareArea);
      }

      async getTotalSquareAreaForUser(userId: number): Promise<string[]> {
        try {
          // Your logic to fetch the total square areas for the given user from the database
          const warehouses = await this.warehouseRepository.find({
            where: { user: { id: userId },WarehouseApproval:warehouseApproval.Warehouse_Approved  },
          });
    
          const totalSquareAreas = warehouses.map((warehouse) => warehouse.totalSquareArea);
    
          return totalSquareAreas;
        } catch (error) {
          console.error('Error fetching total square areas for the user:', error);
          throw error;
        }
      }

      async occupiedspace(): Promise<string[]> {
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.map((warehouse) => warehouse.occupiedSpace);

      }
      async unoccupiedspace(): Promise<string[]> {
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.map((warehouse) => warehouse.unoccupiedSpace);

      }
      async unoccupiedSpaceForUser(userId: number): Promise<string[]> {
        try {
          // Your logic to fetch the total square areas for the given user from the database
          const warehouses = await this.warehouseRepository.find({
            where: { user: { id: userId },WarehouseApproval:warehouseApproval.Warehouse_Approved },
          });
    
          const unoccupiedspace = warehouses.map((warehouse) => warehouse.unoccupiedSpace);
    
          return unoccupiedspace;
        } catch (error) {
          console.error('Error fetching total square areas for the user:', error);
          throw error;
        }
      }

      async occupiedSpaceForUser(userId: number): Promise<string[]> {
        try {
          // Your logic to fetch the total square areas for the given user from the database
          const warehouses = await this.warehouseRepository.find({
            where: { user: { id: userId },WarehouseApproval:warehouseApproval.Warehouse_Approved },
          });
    
          const occupiedspace = warehouses.map((warehouse) => warehouse.occupiedSpace);
    
          return occupiedspace;
        } catch (error) {
          console.error('Error fetching total square areas for the user:', error);
          throw error;
        }
      }
      async storagechargeperPalletForUser(userId: number): Promise<number[]> {
        try {
          // Your logic to fetch the total square areas for the given user from the database
          const warehouses = await this.warehouseRepository.find({
            where: { user: { id: userId },WarehouseApproval:warehouseApproval.Warehouse_Approved },
          });
    
          const storagechargeperPallet = warehouses.map((warehouse) => warehouse.storageCharges_per_pallet);
    
          return storagechargeperPallet;
        } catch (error) {
          console.error('Error fetching total square areas for the user:', error);
          throw error;
        }
      }
      async storagechargeperPallet():Promise<number[]> {
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.map((warehouse) => warehouse.storageCharges_per_pallet);
      }

      async minimumStorageAreaperPallet():Promise<string[]> {
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.map((warehouse) => warehouse.minimumstorageArea_per_pallet);

      }

      async minimumStorageareaperpalletForUser(userId: number): Promise<string[]> {
        try {
          // Your logic to fetch the total square areas for the given user from the database
          const warehouses = await this.warehouseRepository.find({
            where: { user: { id: userId },WarehouseApproval:warehouseApproval.Warehouse_Approved  },
          });
            const minimumstorage_Area_per_pallet = warehouses.map((warehouse) => warehouse.minimumstorageArea_per_pallet);
    
          return minimumstorage_Area_per_pallet ;
        } catch (error) {
          console.error('Error fetching total square areas for the user:', error);
          throw error;
        }
      }

      async minimumstoragechargeperPallet():Promise<number[]> {
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.map((warehouse) => warehouse.minimumStorageCharges_per_pallet);
      }

      async minimumstoragechargeperPalletForUser(userId: number): Promise<number[]> {
        try {
          // Your logic to fetch the total square areas for the given user from the database
          const warehouses = await this.warehouseRepository.find({
            where: { user: { id: userId },WarehouseApproval:warehouseApproval.Warehouse_Approved },
          });
    
          const minimumstoragechargeperPallet = warehouses.map((warehouse) => warehouse.minimumStorageCharges_per_pallet);
    
          return minimumstoragechargeperPallet;
        } catch (error) {
          console.error('Error fetching total square areas for the user:', error);
          throw error;
        }
      }
      async getTotalStorageChargesPerPalletSum(): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + warehouse.storageCharges_per_pallet, 0);
      }
      async getTotalStorageChargesPerPalletSumforuser(userId: number): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { user: { id: userId } ,WarehouseApproval:warehouseApproval.Warehouse_Approved  },
        });
        return warehouses.reduce((sum, warehouse) => sum + warehouse.storageCharges_per_pallet, 0);
      }

      async getTotalstorageChargesSum(): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + warehouse.storageCharges, 0);
      }
      async getTotalstorageChargesSumforuser(userId: number): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { user: { id: userId } ,WarehouseApproval:warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + warehouse.storageCharges, 0);
      }

      async getTotalstorageCharges_per_palletSum(): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + warehouse.storageCharges_per_pallet, 0);
      }
      async getTotalstorageCharges_per_palletSumforuser(userId: number): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { user: { id: userId } ,WarehouseApproval:warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + warehouse.storageCharges_per_pallet, 0);
      }

      async getTotalminimumStorageCharges_per_palletSum(): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + warehouse.minimumStorageCharges_per_pallet, 0);
      }
      async getTotalminimumStorageCharges_per_palletSumforuser(userId: number): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { user: { id: userId } ,WarehouseApproval:warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + warehouse.minimumStorageCharges_per_pallet, 0);
      }

      async getTotalminimumStorageRentSum(): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + warehouse.minimumStorageRent, 0);
      }
      async getTotalminimumStorageRentSumforuser(userId: number): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { user: { id: userId },WarehouseApproval:warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + warehouse.minimumStorageRent, 0);
      }
      async getTotaloccupiedspaceSumforuser(userId: number): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { user: { id: userId },WarehouseApproval:warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + parseFloat(warehouse.occupiedSpace), 0);
      }
      async getTotaloccupiedspaceSum(): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + parseFloat(warehouse.occupiedSpace), 0);
      }
    
      async getTotalunoccupiedspaceSumforuser(userId: number): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { user: { id: userId },WarehouseApproval:warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + parseFloat(warehouse.unoccupiedSpace), 0);
      }
      async getTotalunoccupiedspaceSum(): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + parseFloat(warehouse.unoccupiedSpace), 0);
      }
      async getTotalavailiableareaSumforuser(userId: number): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { user: { id: userId },WarehouseApproval:warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + parseFloat(warehouse.totalAvailiableArea), 0);
      }
      async getTotalabviableareaSum(): Promise<number> {
        const warehouses = await this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approved },
        });
        return warehouses.reduce((sum, warehouse) => sum + parseFloat(warehouse.totalAvailiableArea), 0);
      }

      async getWarehousesPendingApproval(): Promise<WareHouse[]> {
        return this.warehouseRepository.find({
          where: { WarehouseApproval: warehouseApproval.Warehouse_Approval_pending },
          relations: ['user'],
        });
      }

      async setWarehouseStatusToApprovalPending(warehouseId: number): Promise<WareHouse> {
        const warehouse = await this.warehouseRepository.findOne({
          where: { id: warehouseId, WarehouseApproval: warehouseApproval.Warehouse_Reveiw_peding },
          relations: ['user'],
        });
    
        if (!warehouse) {
          throw new Error('Warehouse not found or not in review pending status.');
        }
    
        warehouse.WarehouseApproval = warehouseApproval.Warehouse_Approval_pending;
        return this.warehouseRepository.save(warehouse);
      }

      async sendWarehouseReview(warehouseId: number): Promise<string> {
        try {
          // Fetch the warehouse from the service or repository
          const warehouse = await this.warehouseRepository.findOne({
            where: { id: warehouseId },
            relations: ['user'],
          });
    
          // Define the payload for the JWT token
          const payload = {
            warehouseId: warehouse.id,
            userId: warehouse.user.id,
          };
    
          const secretKey = "secret2"; // Use a different secret key for warehouse review
    
          const token = jwt.sign(payload, secretKey);
          const sha256 = crypto.createHash('sha256');
          sha256.update(token);
          const hashedToken = sha256.digest('hex');
    
          const env = this.configService.get<string>('NODE_ENV');
          const reviewLink =
            env == 'production'
              ? `https://app.globxtrade.co.in/warehouse-review?search=${hashedToken}`
              : `http://localhost:3002/warehouse-review?search=${hashedToken}`;
    
          const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Warehouse Review</title>
            </head>
            <body>
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
                    <div style="background: #333; color: #ffffff; text-align: center; padding: 10px;">
                        <h2>Warehouse Review</h2>
                    </div>
                    <div style="padding: 20px;">
                        <p>Hello,</p>
                        <p>Please click the button below to review your warehouse:</p>
                        <a href="${reviewLink}" style="display: inline-block; background: #007bff; color: #ffffff; text-align: center; text-decoration: none; padding: 10px 20px; margin: 20px 0; border-radius: 5px;">Access Warehouse Review</a>
                        <p>If you have any questions, please don't hesitate to contact us.</p>
                        <p>Thank you!</p>
                    </div>
                    <div style="background: #333; color: #ffffff; text-align: center; padding: 10px;">
                        <p>&copy; ${new Date().getFullYear} Exacoadel</p>
                    </div>
                </div>
            </body>
            </html>
          `;
    
          const email = warehouse.user.email;
    
          sgMail.setApiKey("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");
    
          const response = await sgMail.send({
            to: email,
            from: 'keshav.sharma@xpressword.com',
            subject: 'Warehouse Review',
            html: html,
          });
    
          //warehouse.reviewToken = hashedToken;
          await this.warehouseRepository.save(warehouse);
          return hashedToken;
        } catch (error) {
          throw new Error('Failed to generate warehouse review token: ' + error.message);
        }
      }


    
  }
    


  