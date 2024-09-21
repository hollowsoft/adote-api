import { Injectable } from '@nestjs/common'

import user from '@/module/user/user.json'
import { UserRepository } from '@/module/user/user.repository'
import { Role } from '@/module/user/user.type'

@Injectable()
export class SetUserProvider {
  constructor(private repository: UserRepository) {}

  async run(): Promise<void> {
    const role = Role[user.role]

    this.repository.save(Object.assign(user, { role }))
  }
}
