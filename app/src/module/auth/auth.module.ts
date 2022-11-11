import { APP_GUARD } from '@nestjs/core'

import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { UserModule } from '../user/user.module'

import { AuthGuard as Auth } from './guard/auth.guard'
import { TokenGuard } from './guard/token.guard'
import { PermissionGuard as Permission } from './guard/permission.guard'

import { AuthStrategy } from './strategy/auth.strategy'
import { TokenStrategy } from './strategy/token.strategy'

import { AuthService } from './service/auth.service'
import { AuthMailService } from './service/auth.mail.service'
import { AuthMailCodeService } from './service/auth.mail.code.service'
import { AuthTokenService } from './service/auth.token.service'

import { AuthController } from './auth.controller'

const AuthGuard = {
  provide: APP_GUARD,
  useClass: Auth
}

const PermissionGuard = {
  provide: APP_GUARD,
  useClass: Permission
}

@Module({
  imports: [
    JwtModule,
    PassportModule,
    UserModule
  ],
  providers: [
    AuthGuard,
    PermissionGuard,
    TokenGuard,
    AuthStrategy,
    TokenStrategy,
    AuthService,
    AuthMailService,
    AuthMailCodeService,
    AuthTokenService
  ],
  controllers: [AuthController]
})
export class AuthModule {}
