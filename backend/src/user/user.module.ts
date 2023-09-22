import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { MailModule } from 'src/email/email.module';
import {CACHE_MANAGER} from '@nestjs/cache-manager'
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserResolver, 
    ],
  exports: [UserService],
})
export class UsersModule {}
