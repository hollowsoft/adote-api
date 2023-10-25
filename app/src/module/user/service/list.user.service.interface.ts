import { ListUserRequest } from '../request'

import { UserResponse } from '../response'

export interface IListUserService {
  run(request: ListUserRequest): Promise<UserResponse[]>
}
