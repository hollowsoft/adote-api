import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD, RouterModule } from '@nestjs/core'
import { MongooseModule } from '@nestjs/mongoose'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'

import { AuthModule } from '@/module/auth/auth.module'
import { BreedModule } from '@/module/breed/breed.module'
import { ConfigurationModule } from '@/module/configuration/configuration.module'
import { FavModule } from '@/module/fav/fav.module'
import { HealthModule } from '@/module/health/health.module'
import { ImageModule } from '@/module/image/image.module'
import { LocationModule } from '@/module/location/location.module'
import { MailModule } from '@/module/mail/mail.module'
import { PostModule } from '@/module/post/post.module'
import { UserModule } from '@/module/user/user.module'

import { isProduction } from '@/helper/environment'

import { RepositoryConfigFactory } from './repository.config.factory'
import { RequestConfigFactory } from './request.config.factory'
import { RouteConfig } from './router.config.factory'

@Module({
  imports: [
    AuthModule,
    BreedModule,
    ConfigurationModule,
    FavModule,
    HealthModule,
    ImageModule,
    LocationModule,
    MailModule,
    PostModule,
    UserModule,
    RouterModule.register(RouteConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.ENV}`,
      ignoreEnvFile: isProduction
    }),
    MongooseModule.forRootAsync({
      useClass: RepositoryConfigFactory
    }),
    ThrottlerModule.forRootAsync({
      useClass: RequestConfigFactory
    })
  ],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }]
})
export class AppModule {}
