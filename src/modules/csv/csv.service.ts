import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';

@Injectable()
export class CsvService {
  public filePath: string = './src/database/movielist.csv';
  constructor() {}

  async importCsv(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      fs.createReadStream(this.filePath)
        .pipe(csvParser({ separator: ';' }))
        .on('data', async (row) => {
          console.log(row);
          resolve();
        })
        .on('error', (error) => reject(error));
    });
  }
}
