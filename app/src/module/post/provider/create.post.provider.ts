import type { UserCurrent } from '@/type/auth.type'

import { SavePostRequest } from '../post.request'
import { PostResponse } from '../post.response'
import { SavePost } from '../repository/post.model'
import { PostRepository } from '../repository/post.repository'

export class CreatePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: SavePostRequest, user: UserCurrent): Promise<PostResponse> {
    const post = await this.repository.create(new SavePost(request, user.id))

    return new PostResponse(post)
  }
}
