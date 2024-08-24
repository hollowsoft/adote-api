import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { CreatePost } from './create.post.model'

import { Post, PostDocument } from './post.schema'

@Injectable()
export class PostRepository {
  constructor(@InjectModel(Post.name) private model: Model<Post>) {}

  list(): Promise<PostDocument[]> {
    return this.model.find().exec()
  }

  find(): Promise<PostDocument> {
    return this.model.findById('').exec()
  }

  save(post: CreatePost): Promise<PostDocument> {
    return this.model.create(post)
  }

  remove(): Promise<PostDocument> {
    return this.model.findByIdAndDelete('').exec()
  }
}
