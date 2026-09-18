import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { vi } from 'vitest';
import { SensorsController } from './sensors.controller';
import { SensorsService } from './sensors.service';
import { SensorEntity } from './sensor.entity/sensor.entity';

describe('SensorsController', () => {
  let controller: SensorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensorsController],
      providers: [
        SensorsService,
        {
          provide: getRepositoryToken(SensorEntity),
          useValue: { find: vi.fn() },
        },
      ],
    }).compile();

    controller = module.get<SensorsController>(SensorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
