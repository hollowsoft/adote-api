import { Get, Put, Post, Body, Param, Query, HttpCode, HttpStatus, Controller } from '@nestjs/common'

import { Auth } from '@/decorator/auth.decorator'
import { Permission } from '@/decorator/permission.decorator'

import { Role } from './user.type'
import { Token } from '@/type/token.type'

import { Action, UserProvider } from './provider'

import { ListUserRequest, PatchUserRequest } from './user.request'
import { UserResponse } from './user.response'

@Controller('user')
export class UserController {
  constructor(private readonly provider: UserProvider) {}

  @Get(':id')
  @Permission(Role.Admin)
  get(@Param('id') id: string): Promise<UserResponse> {
    return this.provider.action[Action.Get].run(id)
  }

  @Get('current')
  current(@Auth() token: Token): Promise<UserResponse> {
    const { sub: id } = token

    return this.provider.action[Action.Current].run(id)
  }

  @Get()
  @Permission(Role.Admin)
  list(@Query() request: ListUserRequest): Promise<UserResponse[]> {
    return this.provider.action[Action.List].run(request)
  }

  @Post('image')
  @HttpCode(HttpStatus.OK)
  image(@Auth() token: Token): Promise<void> {
    const { sub: id } = token

    return this.provider.action[Action.Image].run(id)
  }

  @Put()
  patch(@Body() request: PatchUserRequest, @Auth() token: Token): Promise<UserResponse> {
    const { sub: id } = token

    return this.provider.action[Action.Patch].run(request, id)
  }
}
