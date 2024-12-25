import { NotFoundException } from '@nestjs/common'

import type { UserCurrent } from '@/type/auth.type'

import { PostRepository } from '../repository/post.repository'

export class RemovePostProvider {
  readonly empty = 0

  constructor(private readonly repository: PostRepository) {}

  async run(id: string, user: UserCurrent): Promise<void> {
    const { deletedCount: amount } = await this.repository.remove({ _id: id, user: user.id })

    if (this.empty === amount) {
      throw new NotFoundException()
    }
  }
}
