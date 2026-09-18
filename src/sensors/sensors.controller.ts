import { Body, Controller, Get, Post, Patch, Delete} from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { Param } from '@nestjs/common';
import { UpdateSensorDto } from './dto/update-sensor.dto';

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

@Delete(':id')
deleteSensor(@Param('id') id: string) {
  return this.sensorsService.deleteSensor(Number(id));
}

  @Post()
  createSensor(@Body() createSensorDto: CreateSensorDto) {
    return this.sensorsService.createSensor(createSensorDto);
  }

  @Patch(':id')
updateSensor(
  @Param('id') id: string,
  @Body() updateSensorDto: UpdateSensorDto,
) {
  return this.sensorsService.updateSensor(Number(id), updateSensorDto);
}

}