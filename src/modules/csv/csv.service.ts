import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';

import { Movie } from 'database/entities/movies.entity';

@Injectable()
export class CsvService {
  public filePath: string = './src/database/movielist.csv';
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async importCsv(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      fs.createReadStream(this.filePath)
        .pipe(csvParser({ separator: ';' }))
        .on('data', async (row) => {
          const movies = {
            year: parseInt(row?.year, 10),
            studios: row?.studios,
            title: row?.title,
            producers: row?.producers,
            winner: row?.winner === 'yes',
          };
          await this.movieRepository.save(movies);
          resolve();
        })
        .on('error', (error) => reject(error));
    });
  }
}
