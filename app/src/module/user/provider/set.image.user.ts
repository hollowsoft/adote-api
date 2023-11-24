import { Injectable } from '@nestjs/common'

import { UserRepository } from '../user.repository'

@Injectable()
export class SetImageUser {
  constructor(private readonly repository: UserRepository) {}

  run(user: string): Promise<void> {
    return Promise.resolve()
  }
}
