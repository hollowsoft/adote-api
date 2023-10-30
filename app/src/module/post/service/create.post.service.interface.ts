import { Post } from '../entity/post.entity'

import { CreatePostRequest } from '../request'

import { PostResponse } from '../response'

export interface ICreatePostService {
  run(request: CreatePostRequest, user: string): Promise<PostResponse>

  build(request: CreatePostRequest, user: string): Post
}
