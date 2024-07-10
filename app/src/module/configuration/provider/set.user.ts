import { UserRepository } from '@/module/user/user.repository'
import user from '../../../../user.json'
import { Injectable } from '@nestjs/common'
import { Role } from '@/module/user/user.type'

@Injectable()
export class SetUser {
  constructor(private repository: UserRepository) {}

  async run(): Promise<void> {
    const usersArray = user.map((user) => ({
      ...user,
      role: Role[user.role as keyof typeof Role]
    }))

    await this.repository.remove()

    await this.repository.saveMany(usersArray)
  }
}
