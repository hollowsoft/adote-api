import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { ExtractJwt, Strategy } from 'passport-jwt'

import { UserToken } from '@/type/auth.type'

@Injectable()
export class TokenRenewStrategy extends PassportStrategy(Strategy, 'TokenRenew') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.TOKEN_RENEW_SECRET
    })
  }

  validate(token: UserToken): UserToken {
    return token
  }
}
