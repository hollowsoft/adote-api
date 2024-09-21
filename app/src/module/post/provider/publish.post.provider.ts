import { PublishPostRequest } from '../post.request'
import { PublishPostResponse } from '../post.response'
import { PostRepository } from '../repository/post.repository'

export class PublishPostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string, request: PublishPostRequest): Promise<PublishPostResponse> {
    const { publish } = request

    // await this.repository.save()

    return {
      id,
      publish
    }
  }
}
