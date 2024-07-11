import { Injectable } from '@nestjs/common'

import user from '@/module/user/user.json'

import { Role } from '@/module/user/user.type'

import { UserRepository } from '@/module/user/user.repository'

@Injectable()
export class SetUserProvider {
  constructor(private repository: UserRepository) {}

  async run(): Promise<void> {
    const role = Role[user.role]

    this.repository.save(Object.assign(user, { role }))
  }
}
