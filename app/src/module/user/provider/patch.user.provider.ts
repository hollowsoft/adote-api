import type { UserCurrent } from '@/type/auth.type'

import { SaveUser } from '../repository/user.model'
import { UserRepository } from '../repository/user.repository'
import { SaveUserRequest } from '../user.request'
import { UserResponse } from '../user.response'

export class PatchUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(request: SaveUserRequest, user: UserCurrent): Promise<UserResponse> {
    const result = await this.repository.save(new SaveUser(request), { _id: user.id })

    return new UserResponse(result)
  }
}
