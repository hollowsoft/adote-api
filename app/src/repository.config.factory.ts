import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose'

@Injectable()
export class RepositoryConfigFactory implements MongooseOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.config.get<string>('REPOSITORY_URI'),
      user: this.config.get<string>('REPOSITORY_USER'),
      pass: this.config.get<string>('REPOSITORY_PASS'),
      dbName: this.config.get<string>('REPOSITORY_NAME')
    }
  }
}
