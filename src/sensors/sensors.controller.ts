import { Body, Controller, Get, Post } from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { Param } from '@nestjs/common';


@Controller('sensors')
export class SensorsController {

  constructor(private readonly sensorsService: SensorsService) {}

  @Get()
  getSensors() {
    return this.sensorsService.getSensors();
  }

  @Get(':id')
getSensor(@Param('id') id: string) {
  return this.sensorsService.getSensor(Number(id));
}

  @Post()
  createSensor(@Body() createSensorDto: CreateSensorDto) {
    return this.sensorsService.createSensor(createSensorDto);
  }

}