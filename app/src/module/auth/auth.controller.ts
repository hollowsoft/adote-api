import { Post, Body, HttpCode, UseGuards, Controller } from '@nestjs/common'

import { Auth } from '@/decorator/auth.decorator'
import { Public } from '@/decorator/public.decorator'

import { Token } from '@/type/token.type'
import { TokenRenewGuard } from './guard/token.renew.guard'

import { Action, AuthProvider } from './provider'

import { AuthRequest, VerifyRequest } from './auth.request'
import { AuthResponse, TokenResponse } from './auth.response'

@Controller('auth')
export class AuthController {
  constructor(private readonly provider: AuthProvider) {}

  @Post()
  @Public()
  @HttpCode(200)
  mail(@Body() request: AuthRequest): Promise<AuthResponse> {
    return this.provider[Action.Mail].run(request)
  }

  @Post('verify')
  @Public()
  @HttpCode(200)
  code(@Body() request: VerifyRequest): Promise<TokenResponse> {
    return this.provider[Action.Verify].run(request)
  }

  @Post('token')
  @Public()
  @UseGuards(TokenRenewGuard)
  @HttpCode(200)
  token(@Auth() token: Token): Promise<TokenResponse> {
    const { sub: id } = token

    return this.provider[Action.Renew].run(id)
  }
}
