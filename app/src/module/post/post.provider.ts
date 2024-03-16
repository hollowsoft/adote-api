import { Injectable } from '@nestjs/common'

import { PostRepository } from './post.repository'

import { CreatePost, GetPost, ListPost, PublishPost, RemovePost, UpdatePost } from './provider'

export enum Action {
  GetPost,
  ListPost,
  CreatePost,
  PublishPost,
  UpdatePost,
  RemovePost
}

@Injectable()
export class PostProvider {
  action: [GetPost, ListPost, CreatePost, PublishPost, UpdatePost, RemovePost]

  constructor(private readonly repository: PostRepository) {
    this.action = [
      new GetPost(this.repository),
      new ListPost(this.repository),
      new CreatePost(this.repository),
      new PublishPost(this.repository),
      new UpdatePost(this.repository),
      new RemovePost(this.repository)
    ]
  }
}
