import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../user/user.model";
import {Car} from "../car/car.model";
import {Role} from "./role.model";
import {UserRole} from "./user-role.model";

@Module({
  imports: [
    SequelizeModule.forFeature([User, Car, Role, UserRole])],
  exports:[RoleService],
  controllers: [RoleController],
  providers: [RoleService],

})
export class RoleModule {}
