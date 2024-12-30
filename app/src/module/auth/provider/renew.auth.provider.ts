import { BadRequestException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

import { isNil } from 'lodash'

import type { UserRepository } from '@/module/user/repository/user.repository'

import { TokenResponse } from '../auth.response'

export class RenewAuthProvider {
  constructor(
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
    private readonly repository: UserRepository
  ) {}

  async run(mail: string): Promise<TokenResponse> {
    const user = await this.repository.find({ mail })

    if (isNil(user)) {
      throw new BadRequestException()
    }

    const param = {
      sub: user.id,
      user: {
        id: user.id,
        mail: user.mail,
        role: user.role
      }
    }

    const token = this.jwt.sign(param, {
      secret: this.config.get<string>('TOKEN_SECRET'),
      expiresIn: this.config.get<number>('TOKEN_EXPIRE')
    })

    const renew = this.jwt.sign(param, {
      secret: this.config.get<string>('TOKEN_RENEW_SECRET'),
      expiresIn: this.config.get<number>('TOKEN_RENEW_EXPIRE')
    })

    return { token, renew }
  }
}
