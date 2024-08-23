import { Injectable } from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

import { MailAuthProvider } from './mail.auth.provider'
import { RenewAuthProvider } from './renew.auth.provider'
import { VerifyAuthProvider } from './verify.auth.provider'

import { UserRepository } from '@/module/user/user.repository'

@Injectable()
export class AuthProvider {
  readonly mail: MailAuthProvider = new MailAuthProvider(this.repository)
  readonly renew: RenewAuthProvider = new RenewAuthProvider(this.jwt, this.configuration)
  readonly verify: VerifyAuthProvider = new VerifyAuthProvider(this.jwt, this.configuration, this.repository)

  constructor(
    private readonly jwt: JwtService,
    private readonly configuration: ConfigService,
    private readonly repository: UserRepository
  ) {}
}
