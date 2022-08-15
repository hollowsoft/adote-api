import { Injectable } from '@nestjs/common'
import { UserRepository } from 'src/user/user.repository'



@Injectable()
export class AuthMailCase {
  constructor(private readonly repository: UserRepository) {}

  async run(mail: string) {
    const user = await this.repository.find(mail)

    return user
  }
}
