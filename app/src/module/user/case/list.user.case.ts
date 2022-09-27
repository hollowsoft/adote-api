import { Injectable } from '@nestjs/common'

import { User } from '../entity/user.entity'
import { UserRepository } from '../user.repository'

@Injectable()
export class ListUserCase {
  constructor(private readonly repository: UserRepository) {}

  run(enable?: boolean): Promise<User[]> {
    return this.repository.all({
      where: {
        enable
      }
    })
  }
}
