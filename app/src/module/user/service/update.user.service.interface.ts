import { User } from '../entity/user.entity'

import { City } from '../../location/entity/city.entity'
import { UpdateUserRequest } from '../request'

import { UserResponse } from '../response'

export interface IUpdateUserService {
  run(request: UpdateUserRequest, id: string): Promise<UserResponse>
}
