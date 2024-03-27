import { APP_GUARD } from '@nestjs/core'

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'

import { HealthModule } from '@/module/health/health.module'

import { AuthModule } from '@/module/auth/auth.module'
import { UserModule } from '@/module/user/user.module'
import { LocationModule } from '@/module/location/location.module'

import { FavModule } from '@/module/fav/fav.module'
import { PostModule } from '@/module/post/post.module'
import { BreedModule } from '@/module/breed/breed.module'
import { HistoryModule } from '@/module/history/history.module'

import { RequestConfigProvider } from './request.config.provider'
import { RepositoryConfigProvider } from './repository.config.provider'

import { isProduction } from './helper/environment'

const RequestGuardProvider = {
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}

@Module({
  imports: [
    HealthModule,
    AuthModule,
    UserModule,
    LocationModule,
    FavModule,
    PostModule,
    BreedModule,
    HistoryModule,
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: isProduction
    }),
    MongooseModule.forRootAsync({
      useClass: RepositoryConfigProvider
    }),
    ThrottlerModule.forRootAsync({
      useClass: RequestConfigProvider
    })
  ],
  providers: [RequestGuardProvider]
})
export class AppModule {}
