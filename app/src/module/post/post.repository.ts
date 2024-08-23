import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { Gender, Post, PostDocument, Size } from './post.type'

class CreatePost {
  name: string

  description: string

  image: string[]

  pet: {
    name: string

    age: [number, number]

    size: Size

    gender: Gender

    breed: string
  }

  user: string

  location: string

  publish: boolean
}

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
        model.populate([
          { path: 'user.contact', model: 'Contact' },
          { path: 'location' },
          { path: 'user' },
          { path: 'pet.breed', model: 'Breed' }
        ])
      )
  }

  remove(): Promise<PostDocument> {
    return this.model.findByIdAndDelete('').exec()
  }
}
