import { Injectable } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { PublishPostRequest } from '../post.request'
import { PublishPostResponse } from '../post.response'
import { User } from '@/type/token.type'

@Injectable()
export class PublishPost {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string, request: PublishPostRequest, user: User): Promise<PublishPostResponse> {
    const { publish } = request

    await this.repository.save()

    return {
      id,
      publish
    }
  }
}
