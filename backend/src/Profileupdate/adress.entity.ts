import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int,ID } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Adress{
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;
    @Field()
    @Column()
    address: string;
    @Field()
    @Column()
    state: string;
    @Field()
    @Column()
    city: string;
    @Field()
    @Column()
    pinCode: string;
    @Field()
    @Column()
    country: string;
}