import { Post } from '../entity/post.entity'

export class RemovePostResponse {
  readonly id: string

  constructor(post: Post) {
    this.id = post.id
  } 
}
