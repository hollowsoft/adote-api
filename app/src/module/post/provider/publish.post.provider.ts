import type { UserCurrent } from '@/type/auth.type'

import { SavePublishPostRequest } from '../post.request'
import { SavePublishPost } from '../repository/post.model'
import { PostRepository } from '../repository/post.repository'

export class PublishPostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string, request: SavePublishPostRequest, user: UserCurrent): Promise<void> {
    await this.repository.save(new SavePublishPost(request), { id, user: user.id })
  }
}
