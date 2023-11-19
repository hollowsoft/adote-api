import { Injectable, NotFoundException } from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

import { TokenResponse } from '../auth.response'

@Injectable()
export class RenewAuth {
  constructor(
    private readonly config: ConfigService,
    private readonly service: JwtService
  ) {}

  async run(id: string): Promise<TokenResponse> {
    const param = {}

    const token = this.service.sign(param, {
      secret: this.config.get<string>('TOKEN_SECRET'),
      expiresIn: this.config.get<number>('TOKEN_EXPIRE')
    })

    const renew = this.service.sign(param, {
      secret: this.config.get<string>('TOKEN_RENEW_SECRET'),
      expiresIn: this.config.get<number>('TOKEN_RENEW_EXPIRE')
    })

    return { token, renew }
  }
}
