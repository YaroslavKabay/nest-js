import {IsString} from "class-validator";

export class LoginDto {// ?? if it is needed in controller
    @IsString()
    username: string;

    @IsString()
    password: string;
}