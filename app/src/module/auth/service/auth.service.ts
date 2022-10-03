import { Injectable } from '@nestjs/common'

import { AuthMailService } from './auth.mail.service'
import { AuthMailCodeService } from './auth.mail.code.service'

import {
  AuthMailRequest,
  AuthMailCodeRequest
} from '../request'

import {
  AuthMailResponse,
  AuthMailCodeResponse
} from '../response'

@Injectable()
export class AuthService {
  constructor(
    private readonly AUTH_MAIL_SERVICE: AuthMailService,
    private readonly AUTH_MAIL_CODE_SERVICE: AuthMailCodeService
  ) {}

  mail(request: AuthMailRequest): Promise<AuthMailResponse> {
    return this.AUTH_MAIL_SERVICE.run(request)
  }

  code(request: AuthMailCodeRequest): Promise<AuthMailCodeResponse> {
    return this.AUTH_MAIL_CODE_SERVICE.run(request)
  }
}
