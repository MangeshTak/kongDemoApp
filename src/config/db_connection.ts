import { DataSource } from 'typeorm';
import { services } from '../entity/services';
import { versions } from '../entity/versions';

/**
 * Database connection
 * 
 * Implementation with connection pool is better design
 */
export const connectDB = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5431,
  username: 'postgres',
  password: 'password',
  database: 'test',
  synchronize: true,
  logging: true,
  entities: [services, versions],
  subscribers: [],
  migrations: [],
});

connectDB
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });

export default connectDB;
