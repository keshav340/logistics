import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserResolver } from 'src/user/user.resolver';
import { UserService } from './user.service';
import { MailModule } from 'src/email/email.module';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserResolver, 
    ],
  exports: [UserService],
})
export class UsersModule {}