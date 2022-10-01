import { Injectable } from '@nestjs/common'

import { Post } from '../entity/post.entity'

import { ListPostService } from './list.post.service'
import { CreatePostService } from './create.post.service'

@Injectable()
export class PostService {
  constructor(
    private readonly LIST_POST_SERVICE: ListPostService,
    private readonly CREATE_POST_SERVICE: CreatePostService
  ) {}

  all(): Promise<Post[]> {
    return this.LIST_POST_SERVICE.run()
  }

  create(): Promise<Post> {
    return this.CREATE_POST_SERVICE.run()
  }
}
