import {
  Post,
  Body,
  UseGuards,
  Controller
} from '@nestjs/common'

import { Token } from '../../type/token.type'
import { TokenGuard } from './guard/token.guard'

import { Auth } from '../../decorator/auth.decorator'
import { Public } from '../../decorator/public.decorator'

import { AuthService } from './service/auth.service'

import {
  AuthMailRequest,
  AuthMailCodeRequest
} from './request'

import {
  AuthMailResponse,
  AuthMailCodeResponse,
  AuthTokenResponse
} from './response'

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Public()
  @Post('mail')
  mail(@Body() request: AuthMailRequest): Promise<AuthMailResponse> {
    return this.service.mail(request)
  }

  @Public()
  @Post('mail/code')
  code(@Body() request: AuthMailCodeRequest): Promise<AuthMailCodeResponse> {
    return this.service.code(request)
  }

  @Public()
  @UseGuards(TokenGuard)
  @Post('token')
  token(@Auth() token: Token): Promise<AuthTokenResponse> {
    const { sub } = token

    return this.service.token(sub)
  }
}
