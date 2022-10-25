import { Injectable } from '@nestjs/common'

import { GetUserService } from './get.user.service'
import { GetCurrentService } from './get.current.service'
import { ListUserService } from './list.user.service'
import { ImageUserService } from './image.user.service'

import {
  GetUserRequest,
  ListUserRequest
} from '../request'

import {
  GetUserResponse,
  GetCurrentResponse,
  ListUserResponse
} from '../response'

@Injectable()
export class UserService {
  constructor(
    private readonly GET_USER_SERVICE: GetUserService,
    private readonly GET_CURRENT_SERVICE: GetCurrentService,
    private readonly LIST_USER_SERVICE: ListUserService,
    private readonly IMAGE_USER_SERVICE: ImageUserService
  ) {}

  get(request: GetUserRequest): Promise<GetUserResponse> {
    return this.GET_USER_SERVICE.run(request)
  }

  current(user: string): Promise<GetCurrentResponse> {
    return this.GET_CURRENT_SERVICE.run(user)
  }

  all(request: ListUserRequest): Promise<ListUserResponse[]> {
    return this.LIST_USER_SERVICE.run(request)
  }

  image(user: string): Promise<void> {
    return this.IMAGE_USER_SERVICE.run(user)
  }
}
