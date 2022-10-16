import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

import { UserRepository } from '../../user/user.repository'

import { AuthMailCodeRequest } from '../request'
import { AuthMailCodeResponse } from '../response'

import { isNil } from 'lodash'

@Injectable()
export class AuthMailCodeService {
  constructor(
    private readonly config: ConfigService,
    private readonly service: JwtService,
    private readonly repository: UserRepository
  ) {}

  async run(request: AuthMailCodeRequest): Promise<AuthMailCodeResponse> {
    const { mail, code } = request

    const user = await this.repository.find({
      where: {
        mail
      }
    })

    if (isNil(user)) {
      throw new NotFoundException('user not found')
    }

    // TODO: check code

    const token = this.service.sign({ sub: user.id }, {
      secret: this.config.get<string>('AUTH_SECRET'),
      expiresIn: this.config.get<number>('AUTH_EXPIRE')
    })

    const refresh = this.service.sign({ sub: user.id }, {
      secret: this.config.get<string>('TOKEN_SECRET'),
      expiresIn: this.config.get<number>('TOKEN_EXPIRE')
    })

    return new AuthMailCodeResponse(token, refresh)
  }
}