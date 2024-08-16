import { APP_GUARD } from '@nestjs/core'

import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { UserModule } from '@/module/user/user.module'

import { TokenGuard } from './guard/token.guard'
import { PermissionGuard } from './guard/permission.guard'

import { TokenStrategy } from './strategy/token.strategy'
import { TokenRenewStrategy } from './strategy/token.renew.strategy'

import { AuthProvider } from './provider'

import { AuthController } from './auth.controller'
import { MailService } from './mail.service'

@Module({
  imports: [JwtModule, PassportModule, UserModule],
  providers: [
    MailService,
    AuthProvider,
    TokenStrategy,
    TokenRenewStrategy,
    { provide: APP_GUARD, useClass: TokenGuard },
    { provide: APP_GUARD, useClass: PermissionGuard }
  ],
  controllers: [AuthController]
})
export class AuthModule {}
