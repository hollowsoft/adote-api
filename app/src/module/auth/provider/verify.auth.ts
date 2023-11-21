import { Injectable, NotFoundException } from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

import { VerifyRequest } from '../auth.request'
import { TokenResponse } from '../auth.response'

import { isNil } from 'lodash'

@Injectable()
export class VerifyAuth {
  constructor(
    private readonly config: ConfigService,
    private readonly service: JwtService
  ) {}

  async run(request: VerifyRequest): Promise<TokenResponse> {
    const { mail, code } = request

    // TODO: check in the cache for the user

    if (isNil(false)) {
      throw new NotFoundException('user not found')
    }

    const param = {
      // sub: user.id,
      // role: user.role
    }

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
