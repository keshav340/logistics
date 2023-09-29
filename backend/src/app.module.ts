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
import { AuthModule } from './auth/auth.modules';
import { UserService } from './user/user.service';
import { Interface } from 'readline';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [UsersModule,AuthModule,ConfigModule.forRoot(),AuthModule,
    

    GraphQLModule.forRoot({
      driver: ApolloDriver,
     
      playground: true,
      autoSchemaFile: 'src/schema.gql', // Set the file name here
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
       
      },
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: "postgres",
      password: "admin",
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [MyResolver,],
  exports:[]
})
export class AppModule {}
