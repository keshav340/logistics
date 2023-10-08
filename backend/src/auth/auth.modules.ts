import {Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { AuthGuard } from './auth.guard';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
    imports: [TypeOrmModule.forFeature([User]),PassportModule,UsersModule, JwtModule.register({
        signOptions: { expiresIn: '3h' },
        secret:'secret',
      })]
    ,
    controllers:[],
    providers: [ AuthService,
        AuthResolver,
        LocalStrategy,
        JwtStrategy],
    exports: [],

})
export class AuthModule {}