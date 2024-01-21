import { Injectable } from '@nestjs/common'

import { Post } from '../post.entity'
import { PostRepository } from '../post.repository'

import { PublishPostRequest } from '../post.request'
import { PublishPostResponse } from '../post.response'

@Injectable()
export class PublishPost {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string, request: PublishPostRequest): Promise<PublishPostResponse> {
    const { publish } = request

    await this.repository.save({ id, publish } as Post)

    return {
      id,
      publish
    }
  }
}
