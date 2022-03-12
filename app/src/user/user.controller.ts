import { Controller, Get } from '@nestjs/common'

import { User } from './entity/user.entity'

@Controller('user')
export class UserController {
  @Get()
  get(): User {
    return null
  }
}
