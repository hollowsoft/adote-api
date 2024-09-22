import { Injectable } from '@nestjs/common'

import { AddImageProvider } from './add.image.provider'
import { GetCurrentProvider } from './get.current.provider'
import { GetUserProvider } from './get.user.provider'
import { ListUserProvider } from './list.user.provider'
import { PatchUserProvider } from './patch.user.provider'

import { UserRepository } from '../repository/user.repository'

@Injectable()
export class UserProvider {
  readonly get: GetUserProvider = new GetUserProvider(this.repository)
  readonly current: GetCurrentProvider = new GetCurrentProvider(this.repository)
  readonly list: ListUserProvider = new ListUserProvider(this.repository)
  readonly image: AddImageProvider = new AddImageProvider(this.repository)
  readonly patch: PatchUserProvider = new PatchUserProvider(this.repository)

  constructor(private readonly repository: UserRepository) {}
}
