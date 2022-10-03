import {
  Post,
  Body,
  Controller
} from '@nestjs/common'

import { Public } from '../../decorator/public.decorator'

import { AuthService } from './service/auth.service'

import {
  AuthMailRequest,
  AuthMailCodeRequest
} from './request'

import {
  AuthMailResponse,
  AuthMailCodeResponse
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
}
