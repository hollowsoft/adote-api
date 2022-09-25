import {
  Get,
  Param,
  Controller
} from '@nestjs/common'

import { UserService } from './user.service'

import { GetUserResponse } from './response/get.user.response'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<GetUserResponse> {
    const user = await this.service.get(id)

    return new GetUserResponse(user)
  }
}
