import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { BreedModule } from './breed/breed.module'
import { LocationModule } from './location/location.module'

import { RepositoryConfigService } from './repository.config.service'

import { isProd } from './helper/environment'

@Module({
  imports: [
    BreedModule,
    LocationModule,
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: isProd(),
    }),
    TypeOrmModule.forRootAsync({
      useClass: RepositoryConfigService
    })
  ],
})
export class AppModule {}
