import {
  Get,
  Param,
  Query,
  Controller
} from '@nestjs/common'

import { UserService } from './service/user.service'

import { GetUserRequest } from './request/get.user.request'
import { GetUserResponse } from './response/get.user.response'

import { ListUserRequest } from './request/list.user.request'
import { ListUserResponse } from './response/list.user.response'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get(':id')
  async get(@Param() request: GetUserRequest): Promise<GetUserResponse> {
    const { id } = request

    const user = await this.service.get(id)

    return new GetUserResponse(user)
  }

  @Get()
  async all(@Query() request: ListUserRequest): Promise<ListUserResponse[]> {
    const { enable } = request

    const list = await this.service.all(enable)

    return list.map((user) => new ListUserResponse(user))
  }
}
