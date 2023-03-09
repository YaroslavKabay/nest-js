import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {UserDto} from "./dto/user.dto";
import {UserService} from "./user.service";

@Controller('users')// name of controller, direction
export class UserController {

    constructor(private readonly userService: UserService) {
    } // connects service to controller

    @Get()// decorator(could be post & else
    getAllUsers(){
        return this.userService.getAll()
    }

    @Post()
    createUser(@Body() createUserDto: UserDto){ //dto (just naming, data transfer obj)баді яке приходить з фронта
        return this.userService.createUser(createUserDto)// just service
    }

    @Get('/:id')
    getOneUserByID(@Param('id') id:string){ // params decorator
        return `get by id ${id}`
    }
    @Put()
    updateUser(){
        return 'update by id'
    }
}
