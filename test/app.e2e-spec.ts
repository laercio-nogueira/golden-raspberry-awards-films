import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/modules/app.module';
import { MoviesModule } from '../src/modules/movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSource from '../src/database/typeorm.config';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MoviesModule,
        TypeOrmModule.forRootAsync({
          useFactory: async () => ({
            ...dataSource.options,
          }),
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/movies/intervals (GET)', () => {
    return request(app.getHttpServer())
      .get('/movies/intervals')
      .expect(200)
      .expect({
        min: [
          {
            producer: "Joel Silver",
            interval: 1,
            previousWin: 1990,
            followingWin: 1991
          },
        ],
        max: [
          {
            producer: 'Matthew Vaughn',
            interval: 13,
            previousWin: 2002,
            followingWin: 2015,
          },
        ],
      });
  });
});
