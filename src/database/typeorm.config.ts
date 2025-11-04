import { register } from 'tsconfig-paths';
import { DataSource } from 'typeorm';

register({
  baseUrl: '.',
  paths: {
    '@modules/*': ['src/modules/*'],
    '@shared/*': ['src/shared/*'],
  },
});

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT ?? '5432'),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/../../migrations/*{.ts,.js}`],
  ssl: process.env.ENVIRONMENT !== 'local' && {
    rejectUnauthorized: false,
  },
});
