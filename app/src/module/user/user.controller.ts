import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common'

import type { UserToken } from '@/type/auth.type'

import { Permission } from '@/decorator/permission.decorator'
import { User } from '@/decorator/user.decorator'

import { UserProvider } from './provider'
import { Role } from './type/role.enum'
import { ListUserRequest, SaveUserRequest } from './user.request'
import { UserResponse } from './user.response'

@Controller('user')
export class UserController {
  constructor(private readonly provider: UserProvider) {}

  @Get(':id')
  @Permission(Role.ADMIN)
  get(@Param('id') id: string): Promise<UserResponse> {
    return this.provider.get.run(id)
  }

  @Get('current')
  current(@User() token: UserToken): Promise<UserResponse> {
    const {
      user: { id }
    } = token

    return this.provider.get.run(id)
  }

  @Get()
  @Permission(Role.ADMIN)
  list(@Query() request: ListUserRequest): Promise<UserResponse[]> {
    return this.provider.list.run(request)
  }

  @Put()
  save(@Body() request: SaveUserRequest, @User() token: UserToken): Promise<UserResponse> {
    const { user } = token

    return this.provider.save.run(request, user)
  }

  @Post('image')
  image(@User() token: UserToken): Promise<any> {
    const { user } = token

    return this.provider.image.run(user)
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@User() token: UserToken): Promise<void> {
    const {
      user: { id }
    } = token

    return this.provider.remove.run(id)
  }
}
