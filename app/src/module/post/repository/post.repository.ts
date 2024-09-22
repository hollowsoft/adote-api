import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { FilterQuery, Model, mongo } from 'mongoose'

import { CreatePost } from './create.post.model'
import { Post, PostDocument } from './post.schema'

@Injectable()
export class PostRepository {
  constructor(@InjectModel(Post.name) private model: Model<Post>) {}

  list(skip: number, limit: number, query: FilterQuery<Post>): Promise<PostDocument[]> {
    return this.model
      .find(query)
      .skip(skip)
      .limit(limit)
      .populate([
        { path: 'pet.breed', model: 'Breed' },
        { path: 'user.contact', model: 'Contact' },
        { path: 'location', model: 'Location' }
      ])
      .exec()
  }

  find(query: FilterQuery<Post>): Promise<PostDocument> {
    return this.model
      .findOne(query)
      .populate([
        { path: 'pet.breed', model: 'Breed' },
        { path: 'user.contact', model: 'Contact' },
        { path: 'location', model: 'Location' }
      ])
      .exec()
  }

  save(post: CreatePost): Promise<PostDocument> {
    return this.model.create(post)
  }

  remove(query: FilterQuery<Post>): Promise<mongo.DeleteResult> {
    return this.model.deleteOne(query).exec()
  }
}
