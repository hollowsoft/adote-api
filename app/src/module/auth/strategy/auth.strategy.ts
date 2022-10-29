import { Injectable } from '@nestjs/common'

import {
  Strategy,
  ExtractJwt
} from 'passport-jwt'

import { PassportStrategy } from '@nestjs/passport'

import { Token } from '../../../type/token.type'

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, 'auth') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.AUTH_SECRET
    })
  }

  validate(token: Token): Token {
    return token
  }
}
