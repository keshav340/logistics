import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserResolver } from 'src/user/user.resolver';
import { UserService } from './user.service';
import { MailModule } from 'src/email/email.module';
import { CompanyContact } from './company.entity';
import { CorporateAddress } from './corporate.entity';
import { Kyc } from './kyc.entity';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [TypeOrmModule.forFeature([User,CompanyContact,CorporateAddress,Kyc]),ConfigModule],
  providers: [UserService, UserResolver, 
    ],
  exports: [UserService],
})
export class UsersModule {}
