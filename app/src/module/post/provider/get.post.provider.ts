import { Injectable, NotFoundException } from '@nestjs/common'

import { PostResponse } from '../post.response'

import { PostRepository } from '../repository/post.repository'

import { isNil } from 'lodash'

@Injectable()
export class GetPostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string): Promise<PostResponse> {
    const post = await this.repository.find({ id: id }).then((type) =>
      type.populate([
        { path: 'pet.breed', model: 'Breed' },
        { path: 'user.contact', model: 'Contact' },
        { path: 'location', model: 'Location' }
      ])
    )

    if (isNil(post)) {
      throw new NotFoundException('post not found')
    }

    return new PostResponse(post)
  }
}
