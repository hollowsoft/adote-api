import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common'

import { UserToken } from '@/type/auth.type'

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
  current(): Promise<UserResponse> {
    return this.provider.current.run()
  }

  @Get()
  @Permission(Role.ADMIN)
  list(@Query() request: ListUserRequest): Promise<UserResponse[]> {
    return this.provider.list.run(request)
  }

  @Post('image')
  @HttpCode(HttpStatus.OK)
  image(): Promise<void> {
    return this.provider.image.run()
  }

  @Put()
  patch(@Body() request: SaveUserRequest, @User() token: UserToken): Promise<UserResponse> {
    const { user } = token

    return this.provider.patch.run(request, user)
  }
}
