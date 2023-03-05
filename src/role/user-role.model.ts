import {Column, DataType, Table, Model, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

import {User} from "../user/user.model";
import {Role} from "./role.model";

@Table({tableName: 'user_roles'})
export class UserRole extends Model<UserRole>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty()
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false}) // type of column in db
    userId: number;


    @ApiProperty()
    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER, allowNull: false})
    roleId: number;

}