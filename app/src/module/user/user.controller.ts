import {
  Get,
  Put,
  Post,
  Body,
  Query,
  Param,
  Controller
} from '@nestjs/common'

import { Auth } from '../../decorator/auth.decorator'
import { Token } from '../../type/token.type'

import { UserService } from './service/user.service'

import {
  GetUserRequest,
  ListUserRequest,
  UpdateUserRequest
} from './request'

import {
  GetUserResponse,
  GetCurrentResponse,
  ListUserResponse,
  UpdateUserResponse
} from './response'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get(':id')
  get(@Param() request: GetUserRequest): Promise<GetUserResponse> {
    return this.service.get(request)
  }

  @Get('current')
  current(@Auth() token: Token): Promise<GetCurrentResponse> {
    const { sub } = token

    return this.service.current(sub)
  }

  @Get()
  all(@Query() request: ListUserRequest): Promise<ListUserResponse[]> {
    return this.service.all(request)
  }

  @Put()
  update(@Body() request: UpdateUserRequest, @Auth() token: Token): Promise<UpdateUserResponse> {
    const { sub } = token

    return this.service.update(request, sub)
  }

  @Post('image')
  image(@Auth() token: Token): Promise<void> {
    const { sub } = token

    return this.service.image(sub)
  }
}
