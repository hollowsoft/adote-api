import { Post, Body, HttpCode, UseGuards, HttpStatus, Controller } from '@nestjs/common'

import { Public } from '@/decorator/public.decorator'

import { TokenRenewGuard } from './guard/token.renew.guard'

import { Action, AuthProvider } from './provider'

import { AuthRequest, VerifyRequest } from './auth.request'
import { AuthResponse, TokenResponse } from './auth.response'

@Controller('auth')
export class AuthController {
  constructor(private readonly provider: AuthProvider) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.OK)
  mail(@Body() request: AuthRequest): Promise<AuthResponse> {
    return this.provider[Action.Mail].run(request)
  }

  @Post('verify')
  @Public()
  @HttpCode(HttpStatus.OK)
  code(@Body() request: VerifyRequest): Promise<TokenResponse> {
    return this.provider[Action.Verify].run(request)
  }

  @Post('token')
  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(TokenRenewGuard)
  renew(): Promise<TokenResponse> {
    return this.provider[Action.Renew].run()
  }
}
