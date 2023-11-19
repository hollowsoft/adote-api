import { Post, Body, HttpCode, UseGuards, Controller } from '@nestjs/common'

import { Auth } from '../../decorator/auth.decorator'
import { Public } from '../../decorator/public.decorator'

import { Token } from '../../type/token.type'
import { TokenRenewGuard } from './guard/token.renew.guard'

import { AuthRequest, VerifyRequest } from './auth.request'
import { AuthResponse, TokenResponse } from './auth.response'

import { Provider, AuthProvider } from './provider'

@Controller('auth')
export class AuthController {
  constructor(private readonly provider: AuthProvider) {}

  @Public()
  @Post()
  @HttpCode(200)
  mail(@Body() request: AuthRequest): Promise<AuthResponse> {
    return this.provider[Provider.MailAuth].run(request)
  }

  @Public()
  @Post('verify')
  @HttpCode(200)
  code(@Body() request: VerifyRequest): Promise<TokenResponse> {
    return this.provider[Provider.VerifyAuth].run(request)
  }

  @Public()
  @UseGuards(TokenRenewGuard)
  @Post('token')
  @HttpCode(200)
  token(@Auth() token: Token): Promise<TokenResponse> {
    const { sub } = token

    return this.provider[Provider.RenewAuth].run(sub)
  }
}
