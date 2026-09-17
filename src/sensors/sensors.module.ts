import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorsController } from './sensors.controller';
import { SensorsService } from './sensors.service';
import { SensorEntity } from './sensor.entity/sensor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SensorEntity])],
  controllers: [SensorsController],
  providers: [SensorsService],
})
export class SensorsModule {}