import { Injectable } from '@nestjs/common'

import { Post } from '../entity/post.entity'
import { PostRepository } from '../post.repository'

import { CreatePostRequest } from '../request'
import { CreatePostResponse } from '../response'

@Injectable()
export class CreatePostService {
  constructor(private readonly repository: PostRepository) {}

  async run(request: CreatePostRequest): Promise<CreatePostResponse> {
    const post = await this.repository.save(new Post({
      
    }))

    return new CreatePostResponse(post)
  }
}
