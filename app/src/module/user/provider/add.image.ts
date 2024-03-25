import { Injectable } from '@nestjs/common'

import { User } from '@/type/token.type'

import { UserRepository } from '../user.repository'

@Injectable()
export class AddImage {
  constructor(private readonly repository: UserRepository) {}

  run(user: User): Promise<void> {
    return Promise.resolve()
  }
}
