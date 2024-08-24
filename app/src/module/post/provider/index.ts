import { Injectable } from '@nestjs/common'

import { GetPostProvider } from './get.post.provider'
import { ListPostProvider } from './list.post.provider'
import { CreatePostProvider } from './create.post.provider'
import { PatchPostProvider } from './patch.post.provider'
import { PublishPostProvider } from './publish.post.provider'
import { RemovePostProvider } from './remove.post.provider'

import { PostRepository } from '../repository/post.repository'

@Injectable()
export class PostProvider {
  readonly get: GetPostProvider = new GetPostProvider(this.repository)
  readonly list: ListPostProvider = new ListPostProvider(this.repository)
  readonly create: CreatePostProvider = new CreatePostProvider(this.repository)
  readonly patch: PatchPostProvider = new PatchPostProvider(this.repository)
  readonly publish: PublishPostProvider = new PublishPostProvider(this.repository)
  readonly remove: RemovePostProvider = new RemovePostProvider(this.repository)

  constructor(private readonly repository: PostRepository) {}
}
