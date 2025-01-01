import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common'

import type { User, UserToken } from '@/type/auth.type'

import { Permission } from '@/decorator/permission.decorator'
import { UserCurrent } from '@/decorator/user.current.decorator'

import { UserProvider } from './provider'
import { Role } from './type/role.enum'
import { ListUserRequest, SaveUserRequest } from './user.request'
import { UserResponse } from './user.response'

@Controller()
export class UserController {
  constructor(private readonly provider: UserProvider) {}

  @Get()
  @Permission(Role.ADMIN)
  list(@Query() request: ListUserRequest): Promise<UserResponse[]> {
    return this.provider.list.run(request)
  }

  @Get(':id')
  @Permission(Role.ADMIN)
  get(@Param('id') id: string): Promise<UserResponse> {
    return this.provider.get.run(id)
  }

  @Get('current')
  current(@UserCurrent() user: User): Promise<UserResponse> {
    const { id } = user

    return this.provider.get.run(id)
  }

  @Put()
  save(@Body() request: SaveUserRequest, @UserCurrent() user: User): Promise<UserResponse> {
    const { id } = user

    return this.provider.save.run(id, request)
  }

  @Post('image')
  image(@UserCurrent() user: User): Promise<any> {
    const { id } = user

    return this.provider.image.run(id)
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@UserCurrent() user: User): Promise<void> {
    const { id } = user

    return this.provider.remove.run(id)
  }
}
