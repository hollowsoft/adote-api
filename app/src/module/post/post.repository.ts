import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model, QueryOptions } from 'mongoose'

import { Post } from './post.type'

import { DeleteResult } from 'mongodb'

@Injectable()
export class PostRepository {
  constructor(@InjectModel(Post.name) private model: Model<Post>) {}

  list(): Promise<Post[]> {
    return this.model.find().exec()
  }

  find(id: QueryOptions): Promise<Post> {
    return this.model.findById(id).exec()
  }

  save(post: Post): Promise<Post> {
    return this.model.create(post)
  }

  remove(query: QueryOptions): Promise<DeleteResult> {
    return this.model.deleteOne(query).exec()
  }
}
