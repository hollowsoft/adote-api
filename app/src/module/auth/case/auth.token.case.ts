import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { UserRepository } from '../../user/user.repository'

import { isNil } from 'lodash'

@Injectable()
export class AuthTokenCase {
  constructor(private readonly repository: UserRepository) {}

  async run(mail: string, code: string) {
    const find = await this.repository.find({
      where: {
        mail
      }
    })

    if (isNil(find)) {
      throw new NotFoundException('user not found')
    }
  }
}
