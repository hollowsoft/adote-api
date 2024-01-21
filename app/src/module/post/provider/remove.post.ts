import { Injectable, NotFoundException } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { RemovePostRequest } from '../post.request'

import { isNil } from 'lodash'

@Injectable()
export class RemovePost {
  constructor(private readonly repository: PostRepository) {}

  async run(request: RemovePostRequest, user: string): Promise<void> {
    const { id } = request

    const post = await this.repository.find({
      where: {
        id,
        user: {
          id: user
        }
      }
    })

    if (isNil(post)) {
      throw new NotFoundException('post not found')
    }

    await this.repository.remove(post)
  }
}
