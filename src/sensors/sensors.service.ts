import { Injectable ,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SensorEntity } from './sensor.entity/sensor.entity';
import { CreateSensorDto } from './dto/create-sensor.dto';

@Injectable()
export class SensorsService {
  constructor(
    @InjectRepository(SensorEntity)
    private readonly sensorRepository: Repository<SensorEntity>,
  ) {}

  async getSensors(): Promise<SensorEntity[]> {
    return this.sensorRepository.find();
  }

  async getSensor(id: number): Promise<SensorEntity> {
  const sensor = await this.sensorRepository.findOneBy({ id });

  if (!sensor) {
    throw new NotFoundException(`Sensor with ID ${id} not found`);
  }

  return sensor;
}

  async createSensor(createSensorDto: CreateSensorDto): Promise<SensorEntity> {
  const sensor = this.sensorRepository.create(createSensorDto);
  return this.sensorRepository.save(sensor);
}
}
