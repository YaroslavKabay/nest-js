import {Column, DataType, Table,Model} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

@Table({tableName: 'roles'})
export class Role extends Model<Role>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false}) // type of column in db
    value: string;


    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

}