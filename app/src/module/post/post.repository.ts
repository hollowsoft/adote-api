import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { Post } from './post.type'

@Injectable()
export class PostRepository {
  constructor(@InjectModel(Post.name) private model: Model<Post>) {}

  list(): Promise<Post[]> {
    return this.model.find().exec()
  }

  find(): Promise<Post> {
    return this.model.findById('').exec()
  }

  save(post: Post): Promise<Post> {
    return this.model.create(post)
  }

  remove(): Promise<Post> {
    return this.model.findByIdAndDelete('').exec()
  }
}
