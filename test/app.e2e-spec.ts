import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/sensors (GET)', () => {
  return request(app.getHttpServer())
    .get('/sensors')
    .expect(200)
    .expect((response) => {
      expect(Array.isArray(response.body)).toBe(true);
    });
});

it('/sensors (POST)', () => {
  return request(app.getHttpServer())
    .post('/sensors')
    .send({ name: 'E2E Test Sensor' })
    .expect(201)
    .expect((response) => {
      expect(response.body.name).toBe('E2E Test Sensor');
      expect(response.body.id).toBeDefined();
    });
});

it('/sensors/:id (GET)', async () => {
  const createResponse = await request(app.getHttpServer())
    .post('/sensors')
    .send({ name: 'GET By ID Test Sensor' })
    .expect(201);

  const sensorId = createResponse.body.id;

  return request(app.getHttpServer())
    .get(`/sensors/${sensorId}`)
    .expect(200)
    .expect((response) => {
      expect(response.body.id).toBe(sensorId);
      expect(response.body.name).toBe('GET By ID Test Sensor');
    });
});

it('/sensors/:id (PATCH)', async () => {
  const createResponse = await request(app.getHttpServer())
    .post('/sensors')
    .send({ name: 'PATCH Test Sensor' })
    .expect(201);

  const sensorId = createResponse.body.id;

  return request(app.getHttpServer())
    .patch(`/sensors/${sensorId}`)
    .send({ name: 'Updated Test Sensor' })
    .expect(200)
    .expect((response) => {
      expect(response.body.id).toBe(sensorId);
      expect(response.body.name).toBe('Updated Test Sensor');
    });
});

it('/sensors/:id (DELETE)', async () => {
  const createResponse = await request(app.getHttpServer())
    .post('/sensors')
    .send({ name: 'DELETE Test Sensor' })
    .expect(201);

  const sensorId = createResponse.body.id;

  await request(app.getHttpServer())
    .delete(`/sensors/${sensorId}`)
    .expect(200);

  return request(app.getHttpServer())
    .get(`/sensors/${sensorId}`)
    .expect(404);
});

  afterEach(async () => {
    await app.close();
  });
});
