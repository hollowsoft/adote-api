import { Injectable } from '@nestjs/common'

import { AuthMailService } from './auth.mail.service'

import { AuthMailCodeService } from './auth.mail.code.service'

import { AuthTokenService } from './auth.token.service'

import { AuthMailRequest, AuthMailCodeRequest } from '../request'

import { AuthResponse, AuthMailResponse } from '../response'

import { IAuthService } from './auth.service.interface'

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly AUTH_MAIL_SERVICE: AuthMailService,
    private readonly AUTH_MAIL_CODE_SERVICE: AuthMailCodeService,
    private readonly AUTH_TOKEN_SERVICE: AuthTokenService,
  ) {}

  mail(request: AuthMailRequest): Promise<AuthMailResponse> {
    return this.AUTH_MAIL_SERVICE.run(request)
  }

  code(request: AuthMailCodeRequest): Promise<AuthResponse> {
    return this.AUTH_MAIL_CODE_SERVICE.run(request)
  }

  token(id: string): Promise<AuthResponse> {
    return this.AUTH_TOKEN_SERVICE.run(id)
  }
}
