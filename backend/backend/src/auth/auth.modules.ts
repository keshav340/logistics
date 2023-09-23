import {Module } from '@nestjs/common';
import { UsersModule } from 'src/user/user.module';
import { AuthGuard } from './auth.guard';

@Module({
    imports: [UsersModule],
    controllers:[],
    providers: [AuthGuard],
    exports: [],

})
export class AuthModule {}