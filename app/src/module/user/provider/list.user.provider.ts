import { UserRepository } from '../repository/user.repository'
import { ListUserRequest } from '../user.request'
import { UserResponse } from '../user.response'

export class ListUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(request: ListUserRequest): Promise<UserResponse[]> {
    const { enable } = request

    const list = await this.repository.list({ enable })

    return list.map((user) => new UserResponse(user))
  }
}
