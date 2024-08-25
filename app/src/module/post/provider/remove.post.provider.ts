import { NotFoundException } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { isNil } from 'lodash'

export class RemovePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string): Promise<void> {
    const deleteResponse = await this.repository.remove({ id: id })

    if (isNil(deleteResponse) || deleteResponse.deletedCount === 0) {
      throw new NotFoundException('Post not found')
    }
  }
}
