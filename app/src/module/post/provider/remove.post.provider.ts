import { NotFoundException } from '@nestjs/common'

import { PostRepository } from '../repository/post.repository'

export class RemovePostProvider {
  readonly empty = 0

  constructor(private readonly repository: PostRepository) {}

  async run(id: string, user: string): Promise<void> {
    const { deletedCount: count } = await this.repository.remove({ _id: id, user })

    if (count === this.empty) {
      throw new NotFoundException()
    }
  }
}
