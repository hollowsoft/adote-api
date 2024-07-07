import { Injectable } from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

import { MailAuth } from './mail.auth'
import { RenewAuth } from './renew.auth'
import { VerifyAuth } from './verify.auth'

import { UserRepository } from '@/module/user/user.repository'

@Injectable()
export class AuthProvider {
  readonly mail: MailAuth = new MailAuth(this.repository)
  readonly renew: RenewAuth = new RenewAuth(this.jwt, this.configuration)
  readonly verify: VerifyAuth = new VerifyAuth(this.jwt, this.configuration)

  constructor(
    private readonly jwt: JwtService,
    private readonly configuration: ConfigService,
    private readonly repository: UserRepository
  ) {}
}
