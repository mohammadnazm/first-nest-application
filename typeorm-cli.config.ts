import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1675676028883 } from 'src/migrations/1675676028883-CoffeeRefactor';
import { SchemaSync1675678328747 } from 'src/migrations/1675678328747-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'iluvcoffee',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1675676028883, SchemaSync1675678328747],
});
