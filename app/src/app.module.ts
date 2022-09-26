import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from './module/auth/auth.module'
import { BreedModule } from './module/breed/breed.module'
import { LocationModule } from './module/location/location.module'

import { RepositoryConfigService } from './repository.config.service'

import { isProd } from './helper/environment'

@Module({
  imports: [
    AuthModule,
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
