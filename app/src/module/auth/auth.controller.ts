import {
  Post,
  Body,
  Controller
} from '@nestjs/common'

import { AuthService } from './service/auth.service'

import {
  AuthMailRequest,
  AuthTokenRequest
} from './request'

import {
  AuthMailResponse,
  AuthTokenResponse
} from './response'

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('mail')
  mail(@Body() request: AuthMailRequest): Promise<AuthMailResponse> {
    return this.service.mail(request)
  }

  @Post('mail/code')
  token(@Body() request: AuthTokenRequest): Promise<AuthTokenResponse> {
    return this.service.token(request)
  }
}
