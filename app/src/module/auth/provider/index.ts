import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

import { MailProvider } from '@/module/mail/provider'
import { UserRepository } from '@/module/user/repository/user.repository'

import { MailAuthProvider } from './mail.auth.provider'
import { RenewAuthProvider } from './renew.auth.provider'
import { VerifyAuthProvider } from './verify.auth.provider'

@Injectable()
export class AuthProvider {
  readonly mail: MailAuthProvider
  readonly renew: RenewAuthProvider
  readonly verify: VerifyAuthProvider

  constructor(
    private readonly jwt: JwtService,
    private readonly _mail: MailProvider,
    private readonly config: ConfigService,
    private readonly repository: UserRepository
  ) {
    this.mail = new MailAuthProvider(this._mail, this.repository)
    this.renew = new RenewAuthProvider(this.jwt, this.config, this.repository)
    this.verify = new VerifyAuthProvider(this.jwt, this.config, this.repository)
  }
}
