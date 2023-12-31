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
import { CacheModule } from '@nestjs/cache-manager';
import { UserService } from './user/user.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager/dist';
@Module({
  imports: [UsersModule,
    CacheModule.register({
      store: 'memory', // Use 'memory' for local in-memory caching
      ttl: 60000, // Time to live in seconds
      isGlobal: true,
    }),
    
  

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
      username: 'postgres',
      password: 'admin',
      database: 'logistic',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [MyResolver,],
  exports:[]
})
export class AppModule {}
