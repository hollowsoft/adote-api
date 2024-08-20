import { NotFoundException } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { isNil } from 'lodash'

export class RemovePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string): Promise<void> {
    const post = await this.repository.find({ id: id })

    if (isNil(post)) {
      throw new NotFoundException('post not found')
    }

    await this.repository.remove({ id: id })
  }
}
