import {IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Min} from "class-validator";

export class UserDto {
    @IsString()// just validators (do not forget to enable them in main.ts.), всередину дужок можна задавати опції
    @IsOptional()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @Length(2)
    surName: string;

    @IsString()
    @IsEmail()
    email: string;


    @IsNumber()
    @Min(16)
    age: number;

    @IsString()
    city: string;

    @IsBoolean()
    isConfirmed: string;

}