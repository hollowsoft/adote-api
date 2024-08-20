import { Inject, Injectable, NotFoundException } from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

import { VerifyRequest } from '../auth.request'
import { TokenResponse } from '../auth.response'

import { isNil } from 'lodash'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import { UserRepository } from '@/module/user/user.repository'
import { User } from '@/module/user/user.type'
import { Document } from 'mongoose'
import { Token } from '@/type/auth.type'

@Injectable()
export class VerifyAuthProvider {
  constructor(
    private readonly jwt: JwtService,
    private readonly configuration: ConfigService,
    private readonly repository: UserRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async run(request: VerifyRequest): Promise<TokenResponse> {
    const { mail, code } = request

    const cacheToken = await this.cacheManager.get(`${mail}`)

    if (code != cacheToken) {
      throw new NotFoundException('bad request')
    }

    const user = (await this.repository.find({ mail: mail })) as User & Document

    if (isNil(user)) {
      throw new NotFoundException('user not found')
    }

    const param: Token = {
      sub: '',
      iat: 0,
      exp: 0,
      user: {
        id: user._id,
        role: user.role
      }
    }

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
