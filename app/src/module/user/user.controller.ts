import {
  Get,
  Post,
  Query,
  Param,
  Controller
} from '@nestjs/common'

import { Auth } from '../../decorator/auth.decorator'
import { Token } from '../../type/token.type'

import { UserService } from './service/user.service'

import {
  GetUserRequest,
  ListUserRequest
} from './request'

import {
  GetUserResponse,
  ListUserResponse
} from './response'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get(':id')
  get(@Param() request: GetUserRequest): Promise<GetUserResponse> {
    return this.service.get(request)
  }

  @Get()
  all(@Query() request: ListUserRequest): Promise<ListUserResponse[]> {
    return this.service.all(request)
  }

  @Post('image')
  image(@Auth() token: Token): Promise<void> {
    const { sub } = token

    return this.service.image(sub)
  }
}
