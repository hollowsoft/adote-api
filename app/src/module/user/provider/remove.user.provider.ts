import { NotFoundException } from '@nestjs/common'

import { UserRepository } from '../repository/user.repository'

export class RemoveUserProvider {
  private readonly empty = 0

  constructor(private readonly repository: UserRepository) {}

  async run(id: string): Promise<void> {
    const amount = await this.repository.remove({ id })

    if (this.empty === amount) {
      throw new NotFoundException()
    }
  }
}
