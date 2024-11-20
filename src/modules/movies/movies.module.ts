import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Movie } from 'database/entities/movies.entity';
import { CsvService } from 'modules/csv/csv.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MoviesService, CsvService],
  controllers: [MoviesController],
  exports: [CsvService],
})
export class MoviesModule {}
