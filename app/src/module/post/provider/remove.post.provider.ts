import { NotFoundException } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { isNil } from 'lodash'

export class RemovePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string): Promise<void> {
    const postResponse = await this.repository.remove({ _id: id })

    if (isNil(postResponse)) {
      throw new NotFoundException('post not found')
    }
  }
}
