import { Injectable } from '@nestjs/common'

import { AddImageProvider } from './add.image.provider'
import { GetCurrentProvider } from './get.current.provider'
import { GetUserProvider } from './get.user.provider'
import { ListUserProvider } from './list.user.provider'
import { PatchUserProvider } from './patch.user.provider'

import { UserRepository } from '../repository/user.repository'

@Injectable()
export class UserProvider {
  readonly get: GetUserProvider
  readonly current: GetCurrentProvider
  readonly list: ListUserProvider
  readonly image: AddImageProvider
  readonly patch: PatchUserProvider

  constructor(private readonly repository: UserRepository) {
    this.get = new GetUserProvider(this.repository)
    this.current = new GetCurrentProvider(this.repository)
    this.list = new ListUserProvider(this.repository)
    this.image = new AddImageProvider(this.repository)
    this.patch = new PatchUserProvider(this.repository)
  }
}
