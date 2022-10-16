import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import {
  Repository,
  FindOneOptions,
  FindManyOptions
} from 'typeorm'

import { Post } from './entity/post.entity'

@Injectable()
export class PostRepository {
  constructor(@InjectRepository(Post) private readonly repository: Repository<Post>) {}

  all(option?: FindManyOptions<Post>): Promise<Post[]> {
    return this.repository.find(option)
  }

  find(option: FindOneOptions<Post>): Promise<Post | null> {
    return this.repository.findOne(option)
  }

  save(post: Post): Promise<Post> {
    return this.repository.save(post)
  }

  remove(post: Post): Promise<Post> {
    return this.repository.remove(post)
  }
}
