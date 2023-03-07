import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateUserDto} from "./dto/create.user.dto";
import {InjectModel} from "@nestjs/sequelize";

import {User} from "./user.model";
import {RoleService} from "../role/role.service";

@Injectable()
export class UserService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RoleService) { //userRepsotiry : типу назва таблички по якій шукаєм юзерів
    }

    async getAll  () {
        return this.userRepository.findAll({include: {all: true}});
    }

    async createUser(user: CreateUserDto) {

        // const role = await this.roleService.getRole('CLIENT');
        // if(!role){
        //     throw new NotFoundException({message: 'role is not exist'})
        // }

        // const createdUser = await this.userRepository.create(user);
        // const role = await this.roleService.getRole('CLIENT');
        // await createdUser.$set('roles',[role.id]);
        // return createdUser;

        try {
            const createdUser = await this.userRepository.create(user);
            const role = await this.roleService.getRole('CLIENT');
            await createdUser.$set('roles',[role.id]);
            return createdUser;
        }catch (e) {
            throw new BadRequestException({message: 'bad request'})
        }
    }
}
