import { Injectable } from '@nestjs/common'

import { GetUserService } from './get.user.service'
import { ListUserService } from './list.user.service'

import {
  GetUserRequest,
  ListUserRequest
} from '../request'

import {
  GetUserResponse,
  ListUserResponse
} from '../response'

@Injectable()
export class UserService {
  constructor(
    private readonly GET_USER_SERVICE: GetUserService,
    private readonly LIST_USER_SERVICE: ListUserService
  ) {}

  get(request: GetUserRequest): Promise<GetUserResponse> {
    return this.GET_USER_SERVICE.run(request)
  }

  all(request: ListUserRequest): Promise<ListUserResponse[]> {
    return this.LIST_USER_SERVICE.run(request)
  }
}
