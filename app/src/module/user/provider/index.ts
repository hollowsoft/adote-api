import { Injectable } from '@nestjs/common'

import { GetUser } from './get.user'
import { GetCurrent } from './get.current'
import { ListUser } from './list.user'
import { AddImage } from './add.image'
import { PatchUser } from './patch.user'

export enum Action {
  Get,
  Current,
  List,
  Image,
  Patch
}

export { GetUser, GetCurrent, ListUser, AddImage, PatchUser }

@Injectable()
export class UserProvider {
  action: [GetUser, GetCurrent, ListUser, AddImage, PatchUser]

  constructor(
    private readonly get: GetUser,
    private readonly current: GetCurrent,
    private readonly list: ListUser,
    private readonly image: AddImage,
    private readonly patch: PatchUser
  ) {
    this.action = [this.get, this.current, this.list, this.image, this.patch]
  }
}
