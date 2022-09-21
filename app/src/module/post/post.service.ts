import { Injectable } from '@nestjs/common'

import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { Post } from './entity/post.entity'

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private readonly repository: Repository<Post>) {}

  find(): Promise<Post[]> {
    return this.repository.find()
  }
}
