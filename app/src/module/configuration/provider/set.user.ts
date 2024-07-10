import { UserRepository } from '@/module/user/user.repository'
import user from '../../../../user.json'
import { Injectable } from '@nestjs/common'

@Injectable()
export class SetUser {
  constructor(private repository: UserRepository) {}

  async run() {
    await this.repository.remove()

    await this.repository.saveMany(user)
  }
}
