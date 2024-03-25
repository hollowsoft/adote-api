import { Injectable, NotFoundException } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { isNil } from 'lodash'
import { User } from '@/type/token.type'

@Injectable()
export class RemovePost {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string, user: User): Promise<void> {
    const post = await this.repository.find()

    if (isNil(post)) {
      throw new NotFoundException('post not found')
    }

    await this.repository.remove()
  }
}
