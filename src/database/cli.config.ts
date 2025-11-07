import { register } from 'tsconfig-paths';
import { DataSource } from 'typeorm';
import { commonDatabaseConfig } from './database.config';

register({
  baseUrl: '.',
  paths: {
    '@modules/*': ['src/modules/*'],
    '@shared/*': ['src/shared/*'],
  },
});

export default new DataSource({
  ...commonDatabaseConfig,
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/../../migrations/*{.ts,.js}`],
});
