import { InternalServerErrorException } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { PostResponse } from '../post.response'
import { CreatePostRequest } from '../post.request'

export class CreatePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: CreatePostRequest, user: string): Promise<PostResponse> {
    try {
      const post = await this.repository.save(Object.assign(request, { user }))

      return {} as PostResponse
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
