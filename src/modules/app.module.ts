import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MoviesModule } from './movies/movies.module';
import dataSource from 'database/typeorm.config';
import { CsvService } from './csv/csv.service';

@Module({
  imports: [
    MoviesModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...dataSource.options,
      }),
    }),
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly csvService: CsvService) {}

  async onModuleInit() {
    console.log('Iniciando importacao de CSV...');
    try {
      await this.csvService.importCsv();
      console.log('Dados importados com sucesso!');
    } catch ({ message }) {
      console.log('Erro ao importar CSV!');
      console.log(message);
    }
  }
}
