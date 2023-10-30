import {
  GetUserRequest,
  ListUserRequest,
  UpdateUserRequest,
} from '../request'

import { UserResponse } from '../response'

export interface IUserService {
  get(request: GetUserRequest): Promise<UserResponse>

  current(user: string): Promise<UserResponse>

  all(request: ListUserRequest): Promise<UserResponse[]>

  update(request: UpdateUserRequest, user: string): Promise<UserResponse>

  image(user: string): Promise<void>
}
