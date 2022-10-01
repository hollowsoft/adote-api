import { Injectable } from '@nestjs/common'

import { User } from '../../user/entity/user.entity'

import { UserRepository } from '../../user/user.repository'

import { isNil } from 'lodash'

@Injectable()
export class AuthMailService {
  constructor(private readonly repository: UserRepository) {}

  async run(mail: string): Promise<User> {
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

    return find
  }
}
