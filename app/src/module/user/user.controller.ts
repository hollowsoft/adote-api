import { Get, Put, Post, Body, Query, Param, HttpCode, Controller } from '@nestjs/common'

import { Role } from './role.enum'
import { Token } from '../../type/token.type'

import { Auth } from '../../decorator/auth.decorator'
import { Permission } from '../../decorator/permission.decorator'

import { UserResponse } from './user.response'
import { GetUserRequest, ListUserRequest, UpdateUserRequest } from './user.request'

import { Action, UserProvider } from './user.provider'

@Controller('user')
export class UserController {
  constructor(private readonly provider: UserProvider) {}

  @Get(':id')
  @Permission(Role.Admin)
  get(@Param() request: GetUserRequest): Promise<UserResponse> {
    return this.provider.action[Action.GetUser].run(request)
  }

  @Get('current')
  current(@Auth() token: Token): Promise<UserResponse> {
    const { sub } = token

    return this.provider.action[Action.GetCurrent].run(sub)
  }

  @Get()
  @Permission(Role.Admin)
  all(@Query() request: ListUserRequest): Promise<UserResponse[]> {
    return this.provider.action[Action.ListUser].run(request)
  }

  @Put()
  update(
    @Body() request: UpdateUserRequest,
    @Auth() token: Token
  ): Promise<UserResponse> {
    const { sub } = token

    return this.provider.action[Action.UpdateUser].run(request, sub)
  }

  @Post('image')
  @HttpCode(200)
  image(@Auth() token: Token): Promise<void> {
    const { sub } = token

    return this.provider.action[Action.SetImageUser].run(sub)
  }
}
