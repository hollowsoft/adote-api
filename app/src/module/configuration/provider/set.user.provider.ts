import { Injectable } from '@nestjs/common'

import { UserRepository } from '@/module/user/repository/user.repository'
import { Role } from '@/module/user/type/role.enum'
import user from '@/module/user/type/user.json'

@Injectable()
export class SetUserProvider {
  constructor(private repository: UserRepository) {}

  async run(): Promise<void> {
    const role = Role[user.role]

    this.repository.save(Object.assign(user, { role }))
  }
}
