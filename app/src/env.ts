import { Breed } from './breed/entity/breed.entity'

const config = {
  type: 'postgres',
  host: 'ec2-3-230-238-86.compute-1.amazonaws.com',
  port: 5432,
  username: 'twkmggffahkiib',
  password: 'c950083e03f23d41a57afd73aeabcda992695ea8e4a19447af182bc109029a7c',
  database: 'd48qme3gauv0gi',
  entities: [Breed],
  synchronize: true,
  migrations: ['migration/*.ts'],
  migrationsTableName: 'schema',
  cli: {
    migrationsDir: 'src/migration',
  },
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
}

export default config
