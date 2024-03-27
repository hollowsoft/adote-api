import { REQUEST } from '@nestjs/core'

import { Scope, Inject, Injectable } from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { FastifyRequest } from 'fastify'

import { TokenResponse } from '../auth.response'

@Injectable({ scope: Scope.REQUEST })
export class RenewAuth {
  constructor(
    private readonly config: ConfigService,
    private readonly provider: JwtService,
    @Inject(REQUEST) private readonly request: FastifyRequest
  ) {}

  async run(): Promise<TokenResponse> {
    const param = {}

    const token = this.provider.sign(param, {
      secret: this.config.get<string>('TOKEN_SECRET'),
      expiresIn: this.config.get<number>('TOKEN_EXPIRE')
    })

    const renew = this.provider.sign(param, {
      secret: this.config.get<string>('TOKEN_RENEW_SECRET'),
      expiresIn: this.config.get<number>('TOKEN_RENEW_EXPIRE')
    })

    return { token, renew }
  }
}
