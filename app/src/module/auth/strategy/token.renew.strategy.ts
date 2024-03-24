import { Injectable } from '@nestjs/common'

import { PassportStrategy } from '@nestjs/passport'

import { Strategy, ExtractJwt } from 'passport-jwt'

import { Token } from '@/type/token.type'

@Injectable()
export class TokenRenewStrategy extends PassportStrategy(Strategy, 'TokenRenew') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.TOKEN_RENEW_SECRET
    })
  }

  validate(token: Token): Token {
    return token
  }
}
