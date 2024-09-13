import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { MailModule } from '@/module/mail/mail.module'
import { UserModule } from '@/module/user/user.module'

import { AuthController } from './auth.controller'
import { PermissionGuard } from './guard/permission.guard'
import { TokenGuard } from './guard/token.guard'
import { AuthProvider } from './provider'
import { TokenRenewStrategy } from './strategy/token.renew.strategy'
import { TokenStrategy } from './strategy/token.strategy'

@Module({
  imports: [JwtModule, PassportModule, UserModule, MailModule],
  providers: [
    AuthProvider,
    TokenStrategy,
    TokenRenewStrategy,
    { provide: APP_GUARD, useClass: TokenGuard },
    { provide: APP_GUARD, useClass: PermissionGuard }
  ],
  controllers: [AuthController]
})
export class AuthModule {}
