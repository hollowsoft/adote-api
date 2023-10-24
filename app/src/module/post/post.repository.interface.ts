import { FindOneOptions, FindManyOptions } from 'typeorm'

import { Post } from './entity/post.entity'

export interface IPostRepository {
  all(option?: FindManyOptions<Post>): Promise<Post[]>
  find(option: FindOneOptions<Post>): Promise<Post | null>
  save(post: Post): Promise<Post>
  remove(post: Post): Promise<Post>
}
