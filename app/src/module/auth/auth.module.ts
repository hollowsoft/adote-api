import { APP_GUARD } from '@nestjs/core'

import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { UserModule } from '../user/user.module'

import { AuthGuard as Guard } from './guard/auth.guard'
import { AuthStrategy } from './strategy/auth.strategy'

import { AuthService } from './service/auth.service'
import { AuthMailService } from './service/auth.mail.service'
import { AuthMailCodeService } from './service/auth.mail.code.service'

import { AuthController } from './auth.controller'

import { AuthConfigService } from './auth.config.service'

const AuthGuard = {
  provide: APP_GUARD,
  useClass: Guard
}

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      useClass: AuthConfigService
    })
  ],
  providers: [
    AuthGuard,
    AuthStrategy,
    AuthService,
    AuthMailService,
    AuthMailCodeService
  ],
  controllers: [AuthController]
})
export class AuthModule {}
