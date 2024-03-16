import { Injectable } from '@nestjs/common'

import { MailAuth, RenewAuth, VerifyAuth } from './provider'

import { UserRepository } from '../user/user.repository'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

export enum Action {
  MailAuth,
  RenewAuth,
  VerifyAuth
}

@Injectable()
export class AuthProvider {
  action: [MailAuth, RenewAuth, VerifyAuth]

  constructor(
    private readonly repository: UserRepository,
    private readonly config: ConfigService,
    private readonly service: JwtService
  ) {
    this.action = [
      new MailAuth(this.repository),
      new RenewAuth(this.config, this.service),
      new VerifyAuth(this.config, this.service)
    ]
  }
}
