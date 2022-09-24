import {
  Post,
  Body,
  Controller
} from '@nestjs/common'

import { AuthService } from './auth.service'

import { AuthMailRequest } from './request/auth.mail.request'
import { AuthMailResponse } from './response/auth.mail.response'

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('mail')
  async mail(@Body() request: AuthMailRequest): Promise<AuthMailResponse> {
    const { mail } = request

    const user = await this.service.mail(mail)

    return new AuthMailResponse(user)
  }
}
