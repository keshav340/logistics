
import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,Unique,JoinColumn,OneToOne}  from 'typeorm'
import { ObjectType,Field,Int,ID,Float} from '@nestjs/graphql'
import { warehouseType } from 'src/enums/warehouse.enums';
import { hazardousStorageType } from 'src/enums/hazardousstorage.enums';
import { User } from 'src/user/user.entity';
import { temperatureType } from 'src/enums/temperaturetype.enums';
import { temperatureCapacity } from 'src/enums/temperaturecapacity.enums';
import { warehouseApproval } from 'src/enums/warehouse_approval.enums';
import { Booking } from 'src/booking/booking.entity';
@Entity()
@ObjectType()


export class WareHouse{
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    @Field()
    companyName: string;
    @Column()
    @Field()
    Adress: string;
    @Column({nullable:true})
    @Field({nullable:true})
    State: string;
    @Column({nullable:true})
    @Field({nullable:true})
    City: string;
    @Column({nullable:true})
    @Field({nullable:true})
    Pincode: string;
    @Column({nullable:true})
    @Field({nullable:true})
    Country: string;
    @Column({ type: 'enum', enum: warehouseType, nullable: true })
    @Field(() => warehouseType, { nullable: true })
    warehouseType: warehouseType | null
    @Column({nullable:true})
    @Field({nullable:true})
    totalSquareArea: string;
    @Column({nullable:true})
    @Field({nullable:true})
    totalAvailiableArea: string;
    @Column({nullable:true})
    @Field({nullable:true})
    occupiedSpace: string
    @Column({nullable:true})
    @Field({nullable:true})
    unoccupiedSpace:string
    @Column({nullable:true})
    @Field({nullable:true})
    rackedSpace:string
    @ManyToOne(() => User, (user) => user.warehouses)
  @Field(() => User, { nullable: true })
  user: User;
  @Column({nullable:true})
  @Field({nullable:true})
  minimumStorageRent:number
  @Column({nullable:true})
  @Field({nullable:true})
  minimumStorageCharges_per_pallet:number
  @Column({nullable:true})
  @Field({nullable:true})
  minimumStorageArea :string
  @Column({nullable:true})
  @Field({nullable:true})
  minimumstorageArea_per_pallet :string
  @Column({nullable:true})
  @Field({nullable:true})
  storageCharges:number
  @Column({nullable:true})
@Field({nullable:true})
storageCharges_per_pallet:number
@Column({ type: 'enum', enum: hazardousStorageType, nullable: true })
@Field(() => hazardousStorageType, { nullable: true })
hazardousStorageType: hazardousStorageType| null
@Column({type:'enum',enum:temperatureType,nullable:true})
@Field(() => temperatureType,{nullable:true})
temperatureType:temperatureType| null
@Column({type:'enum',enum:temperatureCapacity,nullable:true})
@Field(() => temperatureCapacity,{nullable:true})
temperatureCapacity:temperatureCapacity| null
@Column({type:'enum',enum:warehouseApproval,nullable:true})
@Field(()=>warehouseApproval,{nullable:true})
WarehouseApproval:warehouseApproval| null
@Column({nullable:true})
@Field({nullable:true})
remarks:string;
@Column({nullable:true})
@Field({nullable:true})
uniqueid:string
@Column({ type: 'double precision', nullable: true })
@Field(() => Float, { nullable: true })
latitude: number;

@Column({ type: 'double precision', nullable: true })
@Field(() => Float, { nullable: true })
longitude: number;
@OneToOne(() => Booking, { nullable: true })
  @JoinColumn()
  @Field(() => Booking, { nullable: true })
  booking: Booking;

}