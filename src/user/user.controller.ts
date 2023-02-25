import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {CreateUserDto} from "./dto/create.user.dto";
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
    createUser(@Body() createUserDto: CreateUserDto){ //dto (just naming, data transfer obj)баді яке приходить з фронтаr
        return this.userService.createUser(createUserDto)
    }

    @Get('/:id')
    getOneUserByID(@Param('id') id:string){
        return `get by id ${id}`
    }
    @Put()
    updateUser(){
        return 'update by id'
    }
}
