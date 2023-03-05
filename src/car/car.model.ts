import {BelongsTo, Column, DataType, ForeignKey, Table,Model} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../user/user.model";

@Table({tableName: 'cars'})
export class Car extends Model<Car> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    })
    id: number;


    @ApiProperty({
        example: 'bmw',
        required: false
    })
    @Column({type: DataType.STRING, allowNull: false}) // type of column in db
    model: string;


    @ApiProperty({
        example: 'red',
        required: false
    })
    @Column({type: DataType.STRING, allowNull: false})
    color: string;

    @ForeignKey(()=> User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number;
    @BelongsTo(()=> User)
    client: User

}