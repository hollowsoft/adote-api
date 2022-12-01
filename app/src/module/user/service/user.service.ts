import { Injectable } from '@nestjs/common'

import { GetUserService } from './get.user.service'
import { GetCurrentService } from './get.current.service'
import { ListUserService } from './list.user.service'
import { UpdateUserService } from './update.user.service'
import { ImageUserService } from './image.user.service'

import {
  GetUserRequest,
  ListUserRequest,
  UpdateUserRequest
} from '../request'

import { UserResponse } from '../response'

@Injectable()
export class UserService {
  constructor(
    private readonly GET_USER_SERVICE: GetUserService,
    private readonly GET_CURRENT_SERVICE: GetCurrentService,
    private readonly LIST_USER_SERVICE: ListUserService,
    private readonly UPDATE_USER_SERVICE: UpdateUserService,
    private readonly IMAGE_USER_SERVICE: ImageUserService
  ) {}

  get(request: GetUserRequest): Promise<UserResponse> {
    return this.GET_USER_SERVICE.run(request)
  }

  current(user: string): Promise<UserResponse> {
    return this.GET_CURRENT_SERVICE.run(user)
  }

  all(request: ListUserRequest): Promise<UserResponse[]> {
    return this.LIST_USER_SERVICE.run(request)
  }

  update(request: UpdateUserRequest, user: string): Promise<UserResponse> {
    return this.UPDATE_USER_SERVICE.run(request, user)
  }

  image(user: string): Promise<void> {
    return this.IMAGE_USER_SERVICE.run(user)
  }
}
