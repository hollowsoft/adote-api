import { Injectable, BadRequestException } from '@nestjs/common'

import { User } from 'src/module/user/entity/user.entity'
import { UserRepository } from 'src/module/user/user.repository'

import { AuthRequest } from '../auth.request'
import { AuthResponse } from '../auth.response'

import { isNil } from 'lodash'

@Injectable()
export class MailAuth {
  constructor(private readonly repository: UserRepository) {}

  async run(request: AuthRequest): Promise<AuthResponse> {
    const user = await this.save(request)

    if (isNil(user)) {
      throw new BadRequestException('')
    }

    // TODO: send mail with token

    return {
      id: user.id,
      mail: user.mail
    }
  }

  private async save(request: AuthRequest): Promise<User> {
    const { mail } = request

    const user = await this.repository.find({
      where: {
        mail
      }
    })

    if (user) {
      return user
    }

    return this.repository.save(
      new User({
        mail
      })
    )
  }
}
