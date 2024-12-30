import { Injectable } from '@nestjs/common'

import { UserRepository } from '@/module/user/repository/user.repository'
import { Role } from '@/module/user/type/role.enum'

import User from '@/user.json'

@Injectable()
export class SetUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(): Promise<void> {
    await this.repository.remove({})

    const { name, mail } = User

    const user = {
      mail,
      name,
      contact: {
        mail
      },
      role: Role.ADMIN
    }

    await this.repository.create(user)
  }
}
