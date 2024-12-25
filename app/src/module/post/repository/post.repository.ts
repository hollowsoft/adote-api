import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model, mongo, type FilterQuery } from 'mongoose'

import { SavePost, SavePublishPost } from './post.model'
import { Post, type PostDocument } from './post.schema'

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
        { path: 'user.location', model: 'Location' }
      ])
      .exec()
  }

  find(query: FilterQuery<Post>): Promise<PostDocument | null> {
    return this.model
      .findOne(query)
      .populate([
        { path: 'pet.breed', model: 'Breed' },
        { path: 'user.contact', model: 'Contact' },
        { path: 'user.location', model: 'Location' }
      ])
      .exec()
  }

  create(post: SavePost): Promise<PostDocument> {
    return this.model.create(post).then((type) =>
      type.populate([
        { path: 'pet.breed', model: 'Breed' },
        { path: 'user.contact', model: 'Contact' },
        { path: 'user.location', model: 'Location' }
      ])
    )
  }

  save(post: SavePost | SavePublishPost, query: FilterQuery<Post>): Promise<PostDocument | null> {
    return this.model
      .findOneAndUpdate(query, post)
      .populate([
        { path: 'pet.breed', model: 'Breed' },
        { path: 'user.contact', model: 'Contact' },
        { path: 'user.location', model: 'Location' }
      ])
      .exec()
  }

  remove(query: FilterQuery<Post>): Promise<mongo.DeleteResult> {
    return this.model.deleteOne(query).exec()
  }
}
