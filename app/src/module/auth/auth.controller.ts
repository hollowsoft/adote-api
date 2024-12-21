import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common'

import type { UserToken } from '@/type/auth.type'

import { Public } from '@/decorator/public.decorator'
import { User } from '@/decorator/user.decorator'

import { AuthRequest, VerifyRequest } from './auth.request'
import { AuthResponse, TokenResponse } from './auth.response'
import { TokenRenewGuard } from './guard/token.renew.guard'
import { AuthProvider } from './provider'

@Controller('auth')
export class AuthController {
  constructor(private readonly provider: AuthProvider) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.OK)
  mail(@Body() request: AuthRequest): Promise<AuthResponse> {
    return this.provider.mail.run(request)
  }

  @Post('verify')
  @Public()
  @HttpCode(HttpStatus.OK)
  code(@Body() request: VerifyRequest): Promise<TokenResponse> {
    return this.provider.verify.run(request)
  }

  @Post('renew')
  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(TokenRenewGuard)
  renew(@User() token: UserToken): Promise<TokenResponse> {
    const { user } = token

    return this.provider.renew.run(user)
  }
}
