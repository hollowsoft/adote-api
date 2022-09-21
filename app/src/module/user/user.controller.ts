import { Controller, Get } from '@nestjs/common'

import { User } from './entity/user.entity'

import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  get(): Promise<User[]> {
    return this.service.find()
  }
}
