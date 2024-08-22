import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { CreatePost, Post, PostDocument } from './post.type'

@Injectable()
export class PostRepository {
  constructor(@InjectModel(Post.name) private model: Model<Post>) {}

  list(): Promise<PostDocument[]> {
    return this.model.find().exec()
  }

  find(): Promise<PostDocument> {
    return this.model.findById('').exec()
  }

  async save(post: CreatePost): Promise<PostDocument> {
    return this.model
      .create(post)
      .then((model) =>
        model.populate([{ path: 'user' }, { path: 'location' }, { path: 'pet.breed', model: 'Breed' }])
      )
  }

  remove(): Promise<PostDocument> {
    return this.model.findByIdAndDelete('').exec()
  }
}
