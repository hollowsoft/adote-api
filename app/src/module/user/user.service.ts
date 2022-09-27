import { Injectable } from '@nestjs/common'

import { User } from './entity/user.entity'

import { GetUserCase } from './case/get.user.case'
import { ListUserCase } from './case/list.user.case'

@Injectable()
export class UserService {
  constructor(
    private readonly GET_USER_CASE: GetUserCase,
    private readonly LIST_USER_CASE: ListUserCase
  ) {}

  get(id: string): Promise<User> {
    return this.GET_USER_CASE.run(id)
  }

  all(enable?: boolean): Promise<User[]> {
    return this.LIST_USER_CASE.run(enable)
  }
}
