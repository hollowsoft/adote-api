import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { FilterQuery, Model, mongo } from 'mongoose'

import { CreatePost } from './create.post.model'
import { Post, PostDocument } from './post.schema'

@Injectable()
export class PostRepository {
  constructor(@InjectModel(Post.name) private model: Model<Post>) {}

  async list(skip: number, size: number, query: FilterQuery<Post>): Promise<PostDocument[]> {
    return this.model.find(query).skip(skip).limit(size).exec()
  }

  find(): Promise<PostDocument> {
    return this.model.findById('').exec()
  }

  save(post: CreatePost): Promise<PostDocument> {
    return this.model.create(post)
  }

  remove(query?: FilterQuery<Post>): Promise<mongo.DeleteResult> {
    return this.model.deleteOne(query).exec()
  }
}
