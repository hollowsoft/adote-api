import { Injectable } from '@nestjs/common'

import { User } from '../../user/entity/user.entity'

import { AuthMailService } from './auth.mail.service'
import { AuthTokenService } from './auth.token.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly AUTH_MAIL_SERVICE: AuthMailService,
    private readonly AUTH_TOKEN_SERVICE: AuthTokenService
  ) {}

  mail(mail: string): Promise<User> {
    return this.AUTH_MAIL_SERVICE.run(mail)
  }

  token(mail: string, code: string) {
    return this.AUTH_TOKEN_SERVICE.run(mail, code)
  }
}
