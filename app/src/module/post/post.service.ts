import { Injectable } from '@nestjs/common'

import { Post } from './entity/post.entity'

import { ListPostCase } from './case/list.post.case'
import { CreatePostCase } from './case/create.post.case'

@Injectable()
export class PostService {
  constructor(
    private readonly LIST_POST_CASE: ListPostCase,
    private readonly CREATE_POST_CASE: CreatePostCase
  ) {}

  all(): Promise<Post[]> {
    return this.LIST_POST_CASE.run()
  }

  create(): Promise<Post> {
    return this.CREATE_POST_CASE.run()
  }
}
