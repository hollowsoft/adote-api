import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

import { UserRepository } from '../../user/user.repository'

import { AuthTokenResponse } from '../response'

import { isNil } from 'lodash'

@Injectable()
export class AuthTokenService {
  constructor(
    private readonly config: ConfigService,
    private readonly service: JwtService,
    private readonly repository: UserRepository
  ) {}

  async run(id: string): Promise<AuthTokenResponse> {
    const user = await this.repository.find({
      where: {
        id
      }
    })

    if (isNil(user)) {
      throw new NotFoundException('user not found')
    }

    const param = {
      sub: user.id
    }

    const token = this.service.sign(param, {
      secret: this.config.get<string>('AUTH_SECRET'),
      expiresIn: this.config.get<number>('AUTH_EXPIRE')
    })

    const refresh = this.service.sign(param, {
      secret: this.config.get<string>('TOKEN_SECRET'),
      expiresIn: this.config.get<number>('TOKEN_EXPIRE')
    })

    return new AuthTokenResponse(token, refresh)
  }
}
