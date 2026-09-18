import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { vi } from 'vitest';
import { SensorsService } from './sensors.service';
import { SensorEntity } from './sensor.entity/sensor.entity';

describe('SensorsService', () => {
  let service: SensorsService;

  const mockRepository = {
    find: vi.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SensorsService,
        {
          provide: getRepositoryToken(SensorEntity),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<SensorsService>(SensorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
