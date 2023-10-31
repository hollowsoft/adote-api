import { Injectable } from '@nestjs/common'

import { ConfigService } from '@nestjs/config'

import {
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm'

@Injectable()
export class RepositoryConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly service: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.service.get<string>('DATABASE_HOST'),
      port: this.service.get<number>('DATABASE_PORT'),
      username: this.service.get<string>('DATABASE_USER'),
      password: this.service.get<string>('DATABASE_PASS'),
      database: this.service.get<string>('DATABASE_NAME'),
      entities: ['**/*.entity.js'],
      ssl: {
        rejectUnauthorized: false,
      },
    }
  }
}
