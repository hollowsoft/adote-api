import { Injectable } from '@nestjs/common'

import { CreatePostProvider } from './create.post.provider'
import { GetPostProvider } from './get.post.provider'
import { ListPostProvider } from './list.post.provider'
import { PatchPostProvider } from './patch.post.provider'
import { PublishPostProvider } from './publish.post.provider'
import { RemovePostProvider } from './remove.post.provider'

import { PostRepository } from '../repository/post.repository'

@Injectable()
export class PostProvider {
  readonly get: GetPostProvider
  readonly list: ListPostProvider
  readonly create: CreatePostProvider
  readonly patch: PatchPostProvider
  readonly publish: PublishPostProvider
  readonly remove: RemovePostProvider

  constructor(private readonly repository: PostRepository) {
    this.get = new GetPostProvider(this.repository)
    this.list = new ListPostProvider(this.repository)
    this.create = new CreatePostProvider(this.repository)
    this.patch = new PatchPostProvider(this.repository)
    this.publish = new PublishPostProvider(this.repository)
    this.remove = new RemovePostProvider(this.repository)
  }
}
