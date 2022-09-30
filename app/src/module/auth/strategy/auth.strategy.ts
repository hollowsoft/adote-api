import { Injectable } from '@nestjs/common'

import type { ConfigService } from '@nestjs/config'

import {
  Strategy,
  ExtractJwt
} from 'passport-jwt'

import { PassportStrategy } from '@nestjs/passport'

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly service: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeader(),
      secretOrKey: service.get<string>('SECRET')
    })
  }

  validate(param) {
    return param
  }
}
