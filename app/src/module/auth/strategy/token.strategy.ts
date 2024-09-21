import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { ExtractJwt, Strategy } from 'passport-jwt'

import { Token } from '@/type/auth.type'

@Injectable()
export class TokenStrategy extends PassportStrategy(Strategy, 'Token') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.TOKEN_SECRET
    })
  }

  validate(token: Token): Token {
    return token
  }
}
