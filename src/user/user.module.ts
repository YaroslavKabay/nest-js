import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {UserController} from "./user.controller";
import {SequelizeModule} from "@nestjs/sequelize";

import {User} from "./user.model";
import {UserRole} from "../role/user-role.model";
import {Role} from "../role/role.model";
import {Car} from "../car/car.model";
import {RoleService} from "../role/role.service";
import {RoleModule} from "../role/role.module";

@Module({
  imports: [
      SequelizeModule.forFeature([User, Car, Role, UserRole]),
      RoleModule
  ], //  будем використовувати такі таблички
  controllers: [UserController],
  providers: [UserService,RoleService]
})
export class UserModule {}
