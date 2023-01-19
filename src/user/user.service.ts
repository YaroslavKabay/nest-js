import { Injectable } from '@nestjs/common';
import {UserDto} from "./dto/user.dto";

@Injectable()
export class UserService {
    private users = []

    getAll = ()=>{
        return this.users
}
    createUser = (user: UserDto)=>{
        this.users.push({
            ...user,
            id: new Date().valueOf(),
        })
        return this.users[0];
    }
//
}
