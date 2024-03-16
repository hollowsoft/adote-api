import { APP_GUARD } from '@nestjs/core'

import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { PassportModule } from '@nestjs/passport'
import { JwtService, JwtModule } from '@nestjs/jwt'

import { UserModule } from '../user/user.module'

import { TokenGuard } from './guard/token.guard'
import { PermissionGuard } from './guard/permission.guard'

import { TokenStrategy } from './strategy/token.strategy'
import { TokenRenewStrategy } from './strategy/token.renew.strategy'

import { AuthProvider } from './auth.provider'

import { UserRepository } from '../user/user.repository'

import { AuthController } from './auth.controller'

@Module({
  imports: [JwtModule, PassportModule, UserModule],
  providers: [
    TokenStrategy,
    TokenRenewStrategy,
    { provide: APP_GUARD, useClass: TokenGuard },
    { provide: APP_GUARD, useClass: PermissionGuard },
    AuthProvider,
    UserRepository
  ],
  controllers: [AuthController]
})
export class AuthModule {}
