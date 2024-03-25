import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { Post } from '@/module/post/post.type'

@Injectable()
export class FavRepository {
  constructor(@InjectModel(Post.name) private model: Model<Post>) {}

  list(): Promise<Post[]> {
    return this.model.find().exec()
  }

  save(post: Post): Promise<Post> {
    return new this.model({}).save()
  }

  remove(id: string): Promise<Post> {
    return this.model.findByIdAndDelete('').exec()
  }
}
