import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Car} from "../car/car.model";
import {Role} from "../role/role.model";
import {UserRole} from "../role/user-role.model";

@Table({tableName: 'users'})
export class User extends Model<User>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({
        example: 'Taras',
        required: false
    })
    @Column({type: DataType.STRING, allowNull: false}) // type of column in db
    firstName: string;


    @ApiProperty({
        example: 'Kvas',
        required: false
    })
    @Column({type: DataType.STRING, allowNull: false})
    surName: string;


    @ApiProperty({
        example: 'example@domain.com',
        required: true
    })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email: string;


    @ApiProperty({
        example: 15,
        required: true
    })
    @Column({
        type: DataType.INTEGER,
        allowNull: true
     })
    age: number;


    @ApiProperty({
        example: 'Lviv'
    })
    @Column({type: DataType.STRING, allowNull: true})
    city: string;


    @ApiProperty({
        example: true,
        required: true
    })
    @Column({type: DataType.BOOLEAN, allowNull: false})
    isConfirmed: boolean;

    @ApiProperty({
        example: 'password',
        required: true
    })
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @HasMany(() => Car)
    cars: Car[];

    @BelongsToMany(()=> Role,()=>UserRole)
    roles: Role[]; 

}