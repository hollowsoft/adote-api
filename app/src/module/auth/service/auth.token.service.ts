import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'

import { UserRepository } from '../../user/user.repository'

import { isNil } from 'lodash'

@Injectable()
export class AuthTokenService {
  constructor(
    private readonly service: JwtService,
    private readonly repository: UserRepository
  ) {}

  async run(mail: string, code: string) {
    const user = await this.repository.find({
      where: {
        mail
      }
    })

    if (isNil(user)) {
      throw new NotFoundException('user not found')
    }

    // TODO: check code

    return this.service.sign({
      sub: user.id,
      mail: user.mail
    })
  }
}
