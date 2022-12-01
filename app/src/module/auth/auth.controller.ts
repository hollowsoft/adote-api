import {
  Post,
  Body,
  HttpCode,
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
  AuthTokenResponse
} from './response'

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Public()
  @Post('mail')
  @HttpCode(200)
  mail(@Body() request: AuthMailRequest): Promise<AuthMailResponse> {
    return this.service.mail(request)
  }

  @Public()
  @Post('mail/code')
  @HttpCode(200)
  code(@Body() request: AuthMailCodeRequest): Promise<AuthTokenResponse> {
    return this.service.code(request)
  }

  @Public()
  @UseGuards(TokenGuard)
  @Post('token')
  @HttpCode(200)
  token(@Auth() token: Token): Promise<AuthTokenResponse> {
    const { sub } = token

    return this.service.token(sub)
  }
}
