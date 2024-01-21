import { PostRepository } from './post.repository'

import { GetPost } from './provider/get.post'
import { ListPost } from './provider/list.post'
import { CreatePost } from './provider/create.post'
import { UpdatePost } from './provider/update.post'
import { PublishPost } from './provider/publish.post'
import { RemovePost } from './provider/remove.post'

export enum Action {
  GetPost,
  ListPost,
  CreatePost,
  PublishPost,
  UpdatePost,
  RemovePost
}

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
