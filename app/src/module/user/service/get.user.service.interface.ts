import { GetUserRequest } from '../request'

import { UserResponse } from '../response'

export interface IGetUserService {
  run(request: GetUserRequest): Promise<UserResponse>
}
