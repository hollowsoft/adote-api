import { UserCurrent } from '@/type/auth.type'

import { PatchUser } from '../patch.user.model'
import { UserRepository } from '../user.repository'
import { PatchUserRequest } from '../user.request'
import { UserResponse } from '../user.response'

export class PatchUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(request: PatchUserRequest, { id }: UserCurrent): Promise<UserResponse> {
    const user = await this.repository.update({ _id: id }, new PatchUser(request))

    return new UserResponse(user)
  }
}
