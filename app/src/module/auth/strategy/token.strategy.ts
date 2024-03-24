import { Injectable } from '@nestjs/common'

import { PassportStrategy } from '@nestjs/passport'

import { Strategy, ExtractJwt } from 'passport-jwt'

import { Token } from '@/type/token.type'

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
