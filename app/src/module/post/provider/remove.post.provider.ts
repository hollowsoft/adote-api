import { NotFoundException } from '@nestjs/common'

import { Types } from 'mongoose'

import { PostRepository } from '../repository/post.repository'

export class RemovePostProvider {
  readonly empty = 0

  constructor(private readonly repository: PostRepository) {}

  async run(id: string, user: string): Promise<void> {
    const amount = await this.repository.remove({ _id: id, user: new Types.ObjectId(user) })

    if (this.empty === amount) {
      throw new NotFoundException()
    }
  }
}
