import { Injectable } from '@nestjs/common'

import { User } from '../../user/entity/user.entity'

import { UserRepository } from '../../user/user.repository'

import { AuthMailRequest } from '../request'

import { AuthMailResponse } from '../response'

import { isNil } from 'lodash'

import { IAuthMailService } from './auth.mail.service.interface'

@Injectable()
export class AuthMailService implements IAuthMailService {
  constructor(private readonly repository: UserRepository) {}

  async run(request: AuthMailRequest): Promise<AuthMailResponse> {
    const { mail } = request

    const user = await this.repository.find({
      where: {
        mail,
      },
    })

    if (isNil(user)) {
      const create = await this.repository.save(
        new User({
          mail,
        }),
      )

      // TODO: send mail with token

      return new AuthMailResponse(create)
    }

    // TODO: send mail with token

    return new AuthMailResponse(user)
  }
}
