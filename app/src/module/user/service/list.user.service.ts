import { Injectable } from '@nestjs/common'

import { UserRepository } from '../user.repository'

import { ListUserRequest } from '../request'

import { UserResponse } from '../response'

import { IListUserService } from './list.user.service.interface'

@Injectable()
export class ListUserService implements IListUserService {
  constructor(private readonly repository: UserRepository) {}

  async run(request: ListUserRequest): Promise<UserResponse[]> {
    const { enable } = request

    const list = await this.repository.all({
      where: {
        enable,
      },
      relations: ['city.state', 'contact'],
    })

    return list.map((user) => new UserResponse(user))
  }
}
