import { Injectable } from '@nestjs/common'

import { User } from '../user/entity/user.entity'

import { AuthMailCase } from './case/auth.mail.case'

@Injectable()
export class AuthService {
  constructor(
    private readonly AUTH_MAIL_CASE: AuthMailCase
  ) {}

  mail(mail: string): Promise<User> {
    return this.AUTH_MAIL_CASE.run(mail)
  }
}
