import { DataSource } from 'typeorm'

import * as env from 'dotenv'

env.config()

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: ['**/*.entity.ts'],
  migrations: ['**/repository/seed/*.ts'],
  migrationsTableName: 'seed',
  ssl: {
    rejectUnauthorized: false,
  },
})
