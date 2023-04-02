import {DataSource, DataSourceOptions} from 'typeorm';
import { configService } from './src/config/config.service';

const datasource = new DataSource(
  configService.getTypeOrmConfig() as DataSourceOptions
  // returns here:
  // {
  //   "type": "postgres",
  //   "host": "127.0.0.1",
  //   "port": 5555,
  //   "username": "postgres",
  //   "password": "mysecretpassword",
  //   "database": "my_database",
  //   "entities": [
  //     "**/*.entity{.ts,.js}"
  //   ],
  //   "migrationsTableName": "migration",
  //   "migrations": [
  //     "src/migrations/*.ts"
  //   ],
  //   "ssl": false
  // }
  );
datasource.initialize();

export default datasource; 



