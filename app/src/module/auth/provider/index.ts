import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

import { SendMailProvider } from '@/module/mail/provider/send.mail.provider'
import { UserRepository } from '@/module/user/user.repository'

import { MailAuthProvider } from './mail.auth.provider'
import { RenewAuthProvider } from './renew.auth.provider'
import { VerifyAuthProvider } from './verify.auth.provider'

@Injectable()
export class AuthProvider {
  readonly mail: MailAuthProvider = new MailAuthProvider(this.send, this.repository)
  readonly renew: RenewAuthProvider = new RenewAuthProvider(this.jwt, this.config)
  readonly verify: VerifyAuthProvider = new VerifyAuthProvider(this.jwt, this.config, this.repository)

  constructor(
    private readonly jwt: JwtService,
    private readonly send: SendMailProvider,
    private readonly config: ConfigService,
    private readonly repository: UserRepository
  ) {}
}
