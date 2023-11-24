import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import {
  Repository,
  FindOneOptions,
  FindManyOptions,
  SaveOptions,
  RemoveOptions
} from 'typeorm'

import { Post } from './post.entity'

import { EntityRepository } from 'src/repository.interface'

@Injectable()
export class PostRepository implements EntityRepository<Post> {
  constructor(@InjectRepository(Post) private readonly repository: Repository<Post>) {}

  all(option?: FindManyOptions<Post>): Promise<Post[]> {
    return this.repository.find(option)
  }

  find(option: FindOneOptions<Post>): Promise<Post> {
    return this.repository.findOne(option)
  }

  save(post: Post, option?: SaveOptions): Promise<Post> {
    return this.repository.save(post, option)
  }

  remove(post: Post, option?: RemoveOptions): Promise<Post> {
    return this.repository.remove(post, option)
  }
}
