import { BadRequestException } from '@nestjs/common'

import { isNil } from 'lodash'

import type { UserCurrent } from '@/type/auth.type'

import { SaveUser } from '../repository/user.model'
import { UserRepository } from '../repository/user.repository'
import { SaveUserRequest } from '../user.request'
import { UserResponse } from '../user.response'

export class SaveUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(request: SaveUserRequest, current: UserCurrent): Promise<UserResponse> {
    const user = await this.repository.save(new SaveUser(request), { _id: current.id })

    if (isNil(user)) {
      throw new BadRequestException()
    }

    return new UserResponse(user)
  }
}
