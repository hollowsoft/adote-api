import { Injectable } from '@nestjs/common'

import { GetUser } from './get.user'
import { GetCurrent } from './get.current'
import { ListUser } from './list.user'
import { AddImage } from './add.image'
import { PatchUser } from './patch.user'

import { UserRepository } from '../user.repository'

@Injectable()
export class UserProvider {
  readonly get: GetUser = new GetUser(this.repository)
  readonly current: GetCurrent = new GetCurrent(this.repository)
  readonly list: ListUser = new ListUser(this.repository)
  readonly image: AddImage = new AddImage(this.repository)
  readonly patch: PatchUser = new PatchUser(this.repository)

  constructor(private readonly repository: UserRepository) {}
}
