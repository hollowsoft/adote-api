import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

import { TokenResponse } from '../auth.response'

export class RenewAuthProvider {
  constructor(
    private readonly jwt: JwtService,
    private readonly configuration: ConfigService
  ) {}

  async run(): Promise<TokenResponse> {
    const param = {}

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
