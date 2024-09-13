import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common'

import { Token } from '@/type/auth.type'

import { Auth } from '@/decorator/auth.decorator'
import { Permission } from '@/decorator/permission.decorator'

import { UserProvider } from './provider'
import { ListUserRequest, PatchUserRequest } from './user.request'
import { UserResponse } from './user.response'
import { Role } from './user.type'

@Controller('user')
export class UserController {
  constructor(private readonly provider: UserProvider) {}

  @Get(':id')
  @Permission(Role.Admin)
  get(@Param('id') id: string): Promise<UserResponse> {
    return this.provider.get.run(id)
  }

  @Get('current')
  current(): Promise<UserResponse> {
    return this.provider.current.run()
  }

  @Get()
  @Permission(Role.Admin)
  list(@Query() request: ListUserRequest): Promise<UserResponse[]> {
    return this.provider.list.run(request)
  }

  @Post('image')
  @HttpCode(HttpStatus.OK)
  image(): Promise<void> {
    return this.provider.image.run()
  }

  @Put()
  patch(@Body() request: PatchUserRequest, @Auth() token: Token): Promise<UserResponse> {
    const { user } = token

    return this.provider.patch.run(request, user)
  }
}
