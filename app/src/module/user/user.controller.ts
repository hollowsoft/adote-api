import {
  Get,
  Put,
  Post,
  Body,
  Query,
  Param,
  HttpCode,
  Controller
} from '@nestjs/common'

import { Auth } from '../../decorator/auth.decorator'
import { Permission } from '../../decorator/permission.decorator'

import { Role } from './entity/role.enum'
import { Token } from '../../type/token.type'

import { UserService } from './service/user.service'

import {
  GetUserRequest,
  ListUserRequest,
  UpdateUserRequest
} from './request'

import { UserResponse } from './response'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get(':id')
  @Permission(Role.ADMIN)
  get(@Param() request: GetUserRequest): Promise<UserResponse> {
    return this.service.get(request)
  }

  @Get('current')
  current(@Auth() token: Token): Promise<UserResponse> {
    const { sub } = token

    return this.service.current(sub)
  }

  @Get()
  @Permission(Role.ADMIN)
  all(@Query() request: ListUserRequest): Promise<UserResponse[]> {
    return this.service.all(request)
  }

  @Put()
  update(@Body() request: UpdateUserRequest, @Auth() token: Token): Promise<UserResponse> {
    const { sub } = token

    return this.service.update(request, sub)
  }

  @Post('image')
  @HttpCode(200)
  image(@Auth() token: Token): Promise<void> {
    const { sub } = token

    return this.service.image(sub)
  }
}
