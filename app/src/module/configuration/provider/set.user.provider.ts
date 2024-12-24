import { Injectable } from '@nestjs/common'

import { CreateUser } from '@/module/user/repository/user.model'
import { UserRepository } from '@/module/user/repository/user.repository'
import { Role } from '@/module/user/type/role.enum'

import User from '@/user.json'

@Injectable()
export class SetUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(): Promise<void> {
    const { mail, name } = User

    await this.repository.create(new CreateUser(mail, name, Role.ADMIN))
  }
}
