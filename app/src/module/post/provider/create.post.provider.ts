import { Types } from 'mongoose'

import { SavePostRequest } from '../post.request'
import { PostResponse } from '../post.response'
import { PostRepository } from '../repository/post.repository'

export class CreatePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: SavePostRequest, user: string): Promise<PostResponse> {
    const {
      description,
      image,
      pet: { name, birth, size, gender, breed }
    } = request

    const create = {
      description,
      image,
      pet: { name, birth, size, gender, breed: new Types.ObjectId(breed) },
      user: new Types.ObjectId(user)
    }

    const post = await this.repository.create(create)

    return new PostResponse(post)
  }
}
