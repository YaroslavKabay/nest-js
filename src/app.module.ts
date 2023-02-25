import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import {UserService} from "./user/user.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {User} from "./user/user.model";

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
          username: process.env.POSTGRES_USERNAME,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_NAME,
          models: [User],
          autoLoadModels: true,

    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
