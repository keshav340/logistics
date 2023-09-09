import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';
import { CustomerInput } from './inputs/customer.input';
import { VendorInput } from './inputs/vendor.input';
import { OverseasAgentInput } from './inputs/overseas-agent.input';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UsersModule {}
