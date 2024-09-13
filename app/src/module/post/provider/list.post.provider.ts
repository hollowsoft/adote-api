import { Injectable } from '@nestjs/common'

import { ListPostRequest } from '../post.request'
import { PostResponse } from '../post.response'
import { PostRepository } from '../repository/post.repository'

@Injectable()
export class ListPostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: ListPostRequest): Promise<PostResponse[]> {
    const { page, amount } = request

    const skip = (page - 1) * amount

    const list = await this.repository.list({}, skip, amount)

    return list.map((post) => new PostResponse(post))
  }
}
