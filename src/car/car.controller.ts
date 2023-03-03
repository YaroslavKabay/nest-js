import {Controller, Get} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CarService} from "./car.service";

@ApiTags('Cars')
@Controller('car')
export class CarController {
    @Get()// decorator(could be post & else
    getAllCars(){
        // return this.CarService
    }
}
