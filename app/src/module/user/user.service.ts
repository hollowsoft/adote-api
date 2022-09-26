import { Injectable } from '@nestjs/common'

import { User } from './entity/user.entity'

import { GetUserCase } from './case/get.user.case'

@Injectable()
export class UserService {
  constructor(
    private readonly GET_USER_CASE: GetUserCase
  ) {}

  get(id: string): Promise<User> {
    return this.GET_USER_CASE.run(id)
  }
}
