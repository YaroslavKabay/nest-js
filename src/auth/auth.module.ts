import {Module, } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import {LocalStrategy} from "./local.strategy";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./jwt.strategy";

@Module({
  imports: [
      UserModule,
      JwtModule.register({
        secret: 'secretKey', // need to make const of it
        signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserModule, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
