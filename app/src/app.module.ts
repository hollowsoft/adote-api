import { APP_GUARD } from '@nestjs/core'

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'

import { AuthModule } from '@/module/auth/auth.module'
import { UserModule } from '@/module/user/user.module'
import { LocationModule } from '@/module/location/location.module'

import { FavModule } from '@/module/fav/fav.module'
import { PostModule } from '@/module/post/post.module'
import { BreedModule } from '@/module/breed/breed.module'
import { HistoryModule } from '@/module/history/history.module'

import { MailModule } from '@/module/mail/mail.module'
import { ImageModule } from '@/module/image/image.module'

import { HealthModule } from '@/module/health/health.module'
import { ConfigurationModule } from '@/module/configuration/configuration.module'

import { RequestConfigProvider } from './request.config.provider'
import { RepositoryConfigProvider } from './repository.config.provider'

import { isProduction } from './helper/environment'
import { CacheModule } from '@nestjs/cache-manager'

@Module({
  imports: [
    CacheModule.register(),
    AuthModule,
    UserModule,
    LocationModule,
    FavModule,
    PostModule,
    BreedModule,
    HistoryModule,
    MailModule,
    ImageModule,
    HealthModule,
    ConfigurationModule,
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
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }]
})
export class AppModule {}
