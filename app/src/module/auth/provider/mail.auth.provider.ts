import { Injectable, BadRequestException } from '@nestjs/common'

import { User } from '@/module/user/user.type'
import { UserRepository } from '@/module/user/user.repository'

import { AuthRequest } from '../auth.request'
import { AuthResponse } from '../auth.response'

import { isNil } from 'lodash'

@Injectable()
export class MailAuthProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(request: AuthRequest): Promise<AuthResponse> {
    const user = await this.save(request)

    if (isNil(user)) {
      throw new BadRequestException('')
    }

    // TODO: send mail with token

    return {
      id: '',
      mail: user.mail
    }
  }

  private async save(request: AuthRequest): Promise<User> {
    const { mail } = request

    const user = await this.repository.find()

    if (user) {
      return user
    }

    return this.repository.save({} as any)
  }
}
