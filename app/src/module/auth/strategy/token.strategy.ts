import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'

import { ExtractJwt, Strategy } from 'passport-jwt'

import { UserToken } from '@/type/auth.type'

@Injectable()
export class TokenStrategy extends PassportStrategy(Strategy, 'Token') {
  constructor(readonly config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<string>('TOKEN_SECRET')
    })
  }

  validate(token: UserToken): UserToken {
    return token
  }
}
