import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'sqlite',
  database: ':memory:',
  synchronize: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
});
