import { Injectable } from '@nestjs/common'

import { UserRepository } from '../user.repository'

import { ListUserRequest } from '../request'
import { ListUserResponse } from '../response'

@Injectable()
export class ListUserService {
  constructor(private readonly repository: UserRepository) {}

  async run(request: ListUserRequest): Promise<ListUserResponse[]> {
    const { enable } = request

    const list = await this.repository.all({
      where: {
        enable
      }
    })

    return list.map((user) => new ListUserResponse(user))
  }
}
