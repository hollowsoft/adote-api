import { APP_GUARD } from '@nestjs/core'

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'

import { AuthModule } from './module/auth/auth.module'

import { FavModule } from './module/fav/fav.module'
import { UserModule } from './module/user/user.module'

import { PostModule } from './module/post/post.module'
import { BreedModule } from './module/breed/breed.module'
import { HistoryModule } from './module/history/history.module'
import { LocationModule } from './module/location/location.module'

import { RequestConfigService } from './request.config.service'
import { RepositoryConfigService } from './repository.config.service'

import { isProd } from './helper/environment'

const RequestGuard = {
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}

@Module({
  imports: [
    AuthModule,
    FavModule,
    UserModule,
    PostModule,
    BreedModule,
    HistoryModule,
    LocationModule,
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: isProd()
    }),
    TypeOrmModule.forRootAsync({
      useClass: RepositoryConfigService
    }),
    ThrottlerModule.forRootAsync({
      useClass: RequestConfigService
    })
  ],
  providers: [RequestGuard]
})
export class AppModule {}
