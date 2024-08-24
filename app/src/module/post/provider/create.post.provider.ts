import { InternalServerErrorException } from '@nestjs/common'

import { CreatePost } from '../repository/create.post.model'
import { PostRepository } from '../repository/post.repository'

import { PostResponse } from '../post.response'
import { CreatePostRequest } from '../post.request'

export class CreatePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: CreatePostRequest, user: string): Promise<PostResponse> {
    try {
      const post = await this.repository.save(new CreatePost(request, user)).then((type) =>
        type.populate([
          { path: 'pet.breed', model: 'Breed' },
          { path: 'user.contact', model: 'Contact' },
          { path: 'location', model: 'Location' }
        ])
      )

      return new PostResponse(post)
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
