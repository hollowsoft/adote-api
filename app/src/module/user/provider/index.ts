import { Injectable } from '@nestjs/common'

import { GetUser } from './get.user'
import { GetCurrent } from './get.current'
import { ListUser } from './list.user.service'
import { UpdateUser } from './update.user.service'
import { SetImageUser } from './set.image.user'

export enum Action {
  Get,
  Current,
  List,
  Update,
  Image
}

@Injectable()
export class UserProvider {
  action: [GetUser, GetCurrent, ListUser, UpdateUser, SetImageUser]

  constructor(
    private readonly get: GetUser,
    private readonly current: GetCurrent,
    private readonly list: ListUser,
    private readonly update: UpdateUser,
    private readonly image: SetImageUser
  ) {
    this.action = [this.get, this.current, this.list, this.update, this.image]
  }
}
