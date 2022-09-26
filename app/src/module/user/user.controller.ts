import {
  Get,
  Param,
  Controller
} from '@nestjs/common'

import { UserService } from './user.service'

import { GetUserRequest } from './request/get.user.request'
import { GetUserResponse } from './response/get.user.response'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get(':id')
  async get(@Param() request: GetUserRequest): Promise<GetUserResponse> {
    const { id } = request

    const user = await this.service.get(id)

    return new GetUserResponse(user)
  }
}
