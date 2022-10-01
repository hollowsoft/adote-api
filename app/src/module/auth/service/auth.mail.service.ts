import { Injectable } from '@nestjs/common'

import { User } from '../../user/entity/user.entity'
import { UserRepository } from '../../user/user.repository'

import { AuthMailRequest } from '../request'
import { AuthMailResponse } from '../response'

import { isNil } from 'lodash'

@Injectable()
export class AuthMailService {
  constructor(private readonly repository: UserRepository) {}

  async run(request: AuthMailRequest): Promise<AuthMailResponse> {
    const { mail } = request

    const find = await this.repository.find({
      where: {
        mail
      }
    })

    if (isNil(find)) {
      const create = await this.repository.save(new User({
        mail
      }))

      // TODO: send mail with token

      return create
    }

    // TODO: send mail with token

    return new AuthMailResponse(find)
  }
}
