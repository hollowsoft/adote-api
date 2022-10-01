import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { User } from '../entity/user.entity'
import { UserRepository } from '../user.repository'

import { isNil } from 'lodash'

@Injectable()
export class GetUserService {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string): Promise<User> {
    const user = await this.repository.find({
      where: {
        id
      }
    })

    if (isNil(user)) {
      throw new NotFoundException('user not found')
    }

    return user
  }
}
