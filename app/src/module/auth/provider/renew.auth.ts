import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

import { TokenResponse } from '../auth.response'

export class RenewAuth {
  constructor(
    private readonly config: ConfigService,
    private readonly provider: JwtService
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
