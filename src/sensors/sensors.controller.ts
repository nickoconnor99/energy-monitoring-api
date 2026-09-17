import { Body, Controller, Get, Post } from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { CreateSensorDto } from './dto/create-sensor.dto';


@Controller('sensors')
export class SensorsController {

  constructor(private readonly sensorsService: SensorsService) {}

  @Get()
  getSensors() {
    return this.sensorsService.getSensors();
  }

  @Post()
  createSensor(@Body() createSensorDto: CreateSensorDto) {
    return this.sensorsService.createSensor(createSensorDto);
  }

}