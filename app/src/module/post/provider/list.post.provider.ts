import { Injectable } from '@nestjs/common'

import { PostResponse } from '../post.response'
import { ListPostRequest } from '../post.request'

import { PostRepository } from '../repository/post.repository'

@Injectable()
export class ListPostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: ListPostRequest): Promise<PostResponse[]> {
    const { page, amount } = request

    const skip = (page - 1) * amount

    const list = await this.repository.list(skip, amount, {}).then((posts) =>
      Promise.all(
        posts.map((type) =>
          type.populate([
            { path: 'pet.breed', model: 'Breed' },
            { path: 'user.contact', model: 'Contact' },
            { path: 'location', model: 'Location' }
          ])
        )
      )
    )

    return list.map((post) => new PostResponse(post))
  }
}
