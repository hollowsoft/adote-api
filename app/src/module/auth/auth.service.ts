import { Injectable } from '@nestjs/common'

import { User } from '../user/entity/user.entity'

import { AuthMailCase } from './case/auth.mail.case'
import { AuthTokenCase } from './case/auth.token.case'

@Injectable()
export class AuthService {
  constructor(
    private readonly AUTH_MAIL_CASE: AuthMailCase,
    private readonly AUTH_TOKEN_CASE: AuthTokenCase
  ) {}

  mail(mail: string): Promise<User> {
    return this.AUTH_MAIL_CASE.run(mail)
  }

  token(mail: string, code: string) {
    return this.AUTH_TOKEN_CASE.run(mail, code)
  }
}
