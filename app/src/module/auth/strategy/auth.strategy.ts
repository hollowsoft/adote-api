import { Injectable } from '@nestjs/common'

import {
  Strategy,
  ExtractJwt
} from 'passport-jwt'

import { PassportStrategy } from '@nestjs/passport'

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, 'auth') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET
    })
  }

  validate(param) {
    return param
  }
}
