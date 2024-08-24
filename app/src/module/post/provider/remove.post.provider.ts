import { NotFoundException } from '@nestjs/common'

import { PostRepository } from '../repository/post.repository'

import { isNil } from 'lodash'

export class RemovePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string): Promise<void> {
    const post = await this.repository.find()

    if (isNil(post)) {
      throw new NotFoundException('post not found')
    }

    await this.repository.remove()
  }
}
