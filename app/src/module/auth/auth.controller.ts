import {
  Post,
  Body,
  Controller
} from '@nestjs/common'

import { AuthService } from './service/auth.service'

import { AuthMailRequest } from './request/auth.mail.request'
import { AuthMailResponse } from './response/auth.mail.response'

import { AuthTokenRequest } from './request/auth.token.request'
import { AuthTokenResponse } from './response/auth.token.response'

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('mail')
  async mail(@Body() request: AuthMailRequest): Promise<AuthMailResponse> {
    const { mail } = request

    const user = await this.service.mail(mail)

    return new AuthMailResponse(user)
  }

  @Post('mail/code')
  async token(@Body() request: AuthTokenRequest): Promise<AuthTokenResponse> {
    const { mail, code } = request
    
    await this.service.token(mail, code)

    return new AuthTokenResponse()
  }
}
