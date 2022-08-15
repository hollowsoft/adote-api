import { Injectable } from '@nestjs/common'

import { Post } from '../entity/post.entity'

import { PostRepository } from '../post.repository'

@Injectable()
export class GetPostCase {
  constructor(private readonly repository: PostRepository) {}

  run(): Promise<Post[]> {
    return this.repository.find()
  }
}
