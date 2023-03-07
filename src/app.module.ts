import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {User} from "./user/user.model";
import { RoleModule } from './role/role.module';
import * as process from 'process';
import {Car} from "./car/car.model";
import {Role} from "./role/role.model";
import {UserRole} from "./role/user-role.model";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      UserModule,
      CarModule,
      ConfigModule.forRoot({
          envFilePath: '.env'
      }),
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST, // standard env
          port: Number(process.env.POSTGRES_PORT), // порт число, тому приводим до намбера
          // username: process.env.POSTGRES_USERNAME,
          // password: process.env.POSTGRES_PASSWORD,
          // database: process.env.POSTGRES_NAME,
          username: 'postgres',
          password: 'postgres',
          database: 'postgres',
          models: [User, Car, Role, UserRole],
          autoLoadModels: true,
    }),
      RoleModule,
      AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
