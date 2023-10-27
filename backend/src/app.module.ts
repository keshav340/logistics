import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { MyResolver } from './app.resolver';
import { UsersModule } from './user/user.module';
import { MailModule } from './email/email.module';

import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.modules';
import { WareHouseModule } from './warehouse/warehouse.module';
import { TruckModule } from './truck/truck.module';


@Module({
  imports: [UsersModule,AuthModule,WareHouseModule,TruckModule,
   
    
  

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
      database: process.env.DATABASE_NAME,
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
