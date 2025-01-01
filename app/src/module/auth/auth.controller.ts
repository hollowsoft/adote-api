import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common'

import type { User } from '@/type/auth.type'

import { Public } from '@/decorator/public.decorator'
import { UserCurrent } from '@/decorator/user.current.decorator'

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
    const { mail } = request

    return this.provider.mail.run(mail)
  }

  @Post('verify')
  @Public()
  @HttpCode(HttpStatus.OK)
  code(@Body() request: VerifyRequest): Promise<TokenResponse> {
    const { mail, code } = request

    return this.provider.verify.run(mail, code)
  }

  @Post('renew')
  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(TokenRenewGuard)
  renew(@UserCurrent() user: User): Promise<TokenResponse> {
    const { mail } = user

    return this.provider.renew.run(mail)
  }
}
