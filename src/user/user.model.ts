import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

@Table({tableName: 'users'})
export class User extends Model<User>{ // just model in db
    // @Column({
    //     type: DataType.STRING,
    //     autoIncrement: true,
    //     unique: true,
    //     primaryKey: true
    // })
    // id: string;

    @ApiProperty({
        example: 'Taras',
        required: false
    })
    @Column({type: DataType.STRING}) // type of column in db
    firstName: string;


    @ApiProperty({
        example: 'Kvas',
        required: false
    })
    @Column({type: DataType.STRING})
    surName: string;


    @ApiProperty({
        example: 'example@domain.com',
        required: true
    })
    @Column({
        type: DataType.STRING,
        unique: true
    })
    email: string;


    @ApiProperty({
        example: 15,
        required: true
    })
    @Column({
        type: DataType.INTEGER
     })
    age: number;


    @ApiProperty({
        example: 'Lviv'
    })
    @Column({type: DataType.STRING})
    city: string;


    @ApiProperty({
        example: true,
        required: true
    })
    @Column({type: DataType.BOOLEAN})
    isConfirmed: boolean;

}