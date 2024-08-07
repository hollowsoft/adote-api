import { PostRepository } from '../post.repository'

import { PublishPostRequest } from '../post.request'
import { PublishPostResponse } from '../post.response'

export class PublishPostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(
    id: string,
    request: PublishPostRequest
  ): Promise<PublishPostResponse> {
    const { publish } = request

    await this.repository.save()

    return {
      id,
      publish
    }
  }
}
