import { UserCurrent } from '@/type/auth.type'

import { SaveUser } from '../repository/save.user.model'
import { UserRepository } from '../repository/user.repository'
import { PatchUserRequest } from '../user.request'
import { UserResponse } from '../user.response'

export class PatchUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(request: PatchUserRequest, user: UserCurrent): Promise<UserResponse> {
    const result = await this.repository.update(new SaveUser(request), { _id: user.id })

    return new UserResponse(result)
  }
}
