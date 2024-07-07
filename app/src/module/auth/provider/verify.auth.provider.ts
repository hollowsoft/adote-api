import { Injectable, NotFoundException } from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

import { VerifyRequest } from '../auth.request'
import { TokenResponse } from '../auth.response'

import { isNil } from 'lodash'

@Injectable()
export class VerifyAuthProvider {
  constructor(
    private readonly jwt: JwtService,
    private readonly configuration: ConfigService
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

    const token = this.jwt.sign(param, {
      secret: this.configuration.get<string>('TOKEN_SECRET'),
      expiresIn: this.configuration.get<number>('TOKEN_EXPIRE')
    })

    const renew = this.jwt.sign(param, {
      secret: this.configuration.get<string>('TOKEN_RENEW_SECRET'),
      expiresIn: this.configuration.get<number>('TOKEN_RENEW_EXPIRE')
    })

    return { token, renew }
  }
}
