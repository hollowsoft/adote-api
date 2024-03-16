import { Injectable } from '@nestjs/common'

import { GetCurrent, GetUser, ListUser, SetImageUser, UpdateUser } from './provider'

import { UserRepository } from './user.repository'

export enum Action {
  GetUser,
  GetCurrent,
  ListUser,
  UpdateUser,
  SetImageUser
}

@Injectable()
export class UserProvider {
  action: [GetUser, GetCurrent, ListUser, UpdateUser, SetImageUser]

  constructor(private readonly repository: UserRepository) {
    this.action = [
      new GetUser(this.repository),
      new GetCurrent(this.repository),
      new ListUser(this.repository),
      new UpdateUser(this.repository),
      new SetImageUser(this.repository)
    ]
  }
}
