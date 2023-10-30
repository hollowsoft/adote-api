import { Injectable, NotFoundException } from '@nestjs/common'

import { UserRepository } from '../user.repository'

import { GetUserRequest } from '../request'

import { UserResponse } from '../response'

import { isNil } from 'lodash'

import { IGetUserService } from './get.user.service.interface'

@Injectable()
export class GetUserService implements IGetUserService {
  constructor(private readonly repository: UserRepository) {}

  async run(request: GetUserRequest): Promise<UserResponse> {
    const { id } = request

    const user = await this.repository.find({
      where: {
        id,
      },
      relations: ['city.state', 'contact'],
    })

    if (isNil(user)) {
      throw new NotFoundException('user not found')
    }

    return new UserResponse(user)
  }
}
