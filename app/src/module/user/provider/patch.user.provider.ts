import { UserRepository } from '../user.repository'

import { UserResponse } from '../user.response'
import { PatchUserRequest } from '../user.request'

export class PatchUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(request: PatchUserRequest): Promise<UserResponse> {
    const user = await this.repository.update(request, {})

    return new UserResponse(user)
  }
}
