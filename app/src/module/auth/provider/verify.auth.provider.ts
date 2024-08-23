import { Injectable } from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

import { UserRepository } from '@/module/user/user.repository'

import { VerifyRequest } from '../auth.request'
import { TokenResponse } from '../auth.response'

@Injectable()
export class VerifyAuthProvider {
  constructor(
    private readonly jwt: JwtService,
    private readonly configuration: ConfigService,
    private readonly repository: UserRepository
  ) {}

  async run(request: VerifyRequest): Promise<TokenResponse> {
    const { mail, code } = request

    // TDOO: check in the cache for the user

    const user = await this.repository.find({ mail })

    const param = {
      sub: user.id,
      user: {
        id: user.id,
        role: user.role
      }
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
