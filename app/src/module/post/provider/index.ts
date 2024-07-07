import { Injectable } from '@nestjs/common'

import { GetPost } from './get.post'
import { ListPost } from './list.post'
import { CreatePost } from './create.post'
import { PatchPost } from './patch.post'
import { PublishPost } from './publish.post'
import { RemovePost } from './remove.post'

import { PostRepository } from '../post.repository'

@Injectable()
export class PostProvider {
  readonly get: GetPost = new GetPost(this.repository)
  readonly list: ListPost = new ListPost(this.repository)
  readonly create: CreatePost = new CreatePost(this.repository)
  readonly patch: PatchPost = new PatchPost(this.repository)
  readonly publish: PublishPost = new PublishPost(this.repository)
  readonly remove: RemovePost = new RemovePost(this.repository)

  constructor(private readonly repository: PostRepository) {}
}
