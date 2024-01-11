import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { MyResolver } from './app.resolver';
import { UsersModule } from './user/user.module';
import { MailModule } from './email/email.module';
//import { profileUpdate } from './profileupdate/profileupdate.module';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.modules';
import { WareHouseModule } from './warehouse/warehouse.module';
import { TruckModule } from './truck/truck.module';
import { BookingModule } from './booking/booking.module';
import { ConfigModule } from '@nestjs/config';
//import { ShipmentResolver } from './shipment.resolver';
import { CodeModule } from './freights/code.module';
@Module({
  imports: [UsersModule,AuthModule,WareHouseModule,TruckModule,BookingModule,CodeModule,ConfigModule.forRoot({isGlobal:true}),//profileUpdate,
   
    
  

    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'src/schema.gql', // Set the file name here
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DATABASE_USERNAME,
      database: 'postgres',
      password: process.env.DATABASE_PASSWORD,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [MyResolver],
  exports:[]
})
export class AppModule {}
