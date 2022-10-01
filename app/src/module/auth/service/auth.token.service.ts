import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'

import { UserRepository } from '../../user/user.repository'

import { AuthTokenRequest } from '../request'
import { AuthTokenResponse } from '../response'

import { isNil } from 'lodash'

@Injectable()
export class AuthTokenService {
  constructor(
    private readonly service: JwtService,
    private readonly repository: UserRepository
  ) {}

  async run(request: AuthTokenRequest): Promise<AuthTokenResponse> {
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

    this.service.sign({
      sub: user.id,
      mail: user.mail
    })

    return new AuthTokenResponse()
  }
}
