import { Post } from '../entity/post.entity'

export class PublishPostResponse {
  readonly id: string
  readonly publish: boolean

  constructor(post: Post) {
    this.id = post.id
    this.publish = post.publish
  }
}
