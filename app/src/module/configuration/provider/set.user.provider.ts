import { Injectable } from '@nestjs/common'

import { CreateAdmin } from '@/module/user/repository/user.model'
import { UserRepository } from '@/module/user/repository/user.repository'

import User from '@/user.json'

@Injectable()
export class SetUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(): Promise<void> {
    const { mail, name } = User

    await this.repository.admin(new CreateAdmin(mail, name))
  }
}
