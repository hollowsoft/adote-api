import { UserRepository } from '../user.repository'

import { UserResponse } from '../user.response'
import { PatchUserRequest } from '../user.request'
import { PatchUser } from '../patch.user.model'

export class PatchUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(request: PatchUserRequest): Promise<UserResponse> {
    const user = await this.repository
      .update(new PatchUser(request), { name: request.name })
      .then((type) => type.populate([{ path: 'location', model: 'Location' }]))

    return new UserResponse(user)
  }
}
