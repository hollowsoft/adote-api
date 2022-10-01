import { Injectable } from '@nestjs/common'

import { User } from '../entity/user.entity'

import { GetUserService } from './get.user.service'
import { ListUserService } from './list.user.service'

@Injectable()
export class UserService {
  constructor(
    private readonly GET_USER_SERVICE: GetUserService,
    private readonly LIST_USER_SERVICE: ListUserService
  ) {}

  get(id: string): Promise<User> {
    return this.GET_USER_SERVICE.run(id)
  }

  all(enable?: boolean): Promise<User[]> {
    return this.LIST_USER_SERVICE.run(enable)
  }
}
