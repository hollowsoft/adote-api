import { Get, Put, Post, Body, Param, Query, HttpCode, HttpStatus, Controller } from '@nestjs/common'

import { Permission } from '@/decorator/permission.decorator'

import { Role } from './user.type'

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
  current(): Promise<UserResponse> {
    return this.provider.action[Action.Current].run()
  }

  @Get()
  @Permission(Role.Admin)
  list(@Query() request: ListUserRequest): Promise<UserResponse[]> {
    return this.provider.action[Action.List].run(request)
  }

  @Post('image')
  @HttpCode(HttpStatus.OK)
  image(): Promise<void> {
    return this.provider.action[Action.Image].run()
  }

  @Put()
  patch(@Body() request: PatchUserRequest): Promise<UserResponse> {
    return this.provider.action[Action.Patch].run(request)
  }
}
