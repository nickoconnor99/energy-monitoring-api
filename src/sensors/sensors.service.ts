import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SensorEntity } from './sensor.entity/sensor.entity';

@Injectable()
export class SensorsService {
  constructor(
    @InjectRepository(SensorEntity)
    private readonly sensorRepository: Repository<SensorEntity>,
  ) {}

  async getSensors(): Promise<SensorEntity[]> {
    return this.sensorRepository.find();
  }
}
