import { APP_GUARD } from '@nestjs/core'

import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { UserModule } from '@/module/user/user.module'

import { TokenGuard } from './guard/token.guard'
import { PermissionGuard } from './guard/permission.guard'

import { TokenStrategy } from './strategy/token.strategy'
import { TokenRenewStrategy } from './strategy/token.renew.strategy'

import { MailAuth, RenewAuth, VerifyAuth, AuthProvider } from './provider'

import { AuthController } from './auth.controller'

const TokenGuardProvider = {
  provide: APP_GUARD,
  useClass: TokenGuard
}

const PermissionGuardProvider = {
  provide: APP_GUARD,
  useClass: PermissionGuard
}

@Module({
  imports: [JwtModule, PassportModule, UserModule],
  providers: [
    MailAuth,
    RenewAuth,
    VerifyAuth,
    AuthProvider,
    TokenGuardProvider,
    PermissionGuardProvider,
    TokenStrategy,
    TokenRenewStrategy
  ],
  controllers: [AuthController]
})
export class AuthModule {}
