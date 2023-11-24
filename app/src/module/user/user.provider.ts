import { Injectable } from '@nestjs/common'

import { GetUser } from './provider/get.user'
import { GetCurrent } from './provider/get.current'
import { ListUser } from './provider/list.user.service'
import { UpdateUser } from './provider/update.user.service'
import { SetImageUser } from './provider/set.image.user'

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
