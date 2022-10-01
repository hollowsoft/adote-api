import { Injectable } from '@nestjs/common'

import { AuthMailService } from './auth.mail.service'
import { AuthTokenService } from './auth.token.service'

import {
  AuthMailRequest,
  AuthTokenRequest
} from '../request'

import {
  AuthMailResponse,
  AuthTokenResponse
} from '../response'

@Injectable()
export class AuthService {
  constructor(
    private readonly AUTH_MAIL_SERVICE: AuthMailService,
    private readonly AUTH_TOKEN_SERVICE: AuthTokenService
  ) {}

  mail(request: AuthMailRequest): Promise<AuthMailResponse> {
    return this.AUTH_MAIL_SERVICE.run(request)
  }

  token(request: AuthTokenRequest): Promise<AuthTokenResponse> {
    return this.AUTH_TOKEN_SERVICE.run(request)
  }
}
