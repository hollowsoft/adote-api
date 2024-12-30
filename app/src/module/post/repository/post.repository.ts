import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model, Types, type FilterQuery } from 'mongoose'

import { Post, type PostDocument } from './post.schema'

import { Gender } from '../type/gender.enum'
import { Size } from '../type/size.enum'

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

  async create(post: {
    description: string
    image: string[]
    pet: {
      name: string
      birth: Date
      size: Size
      gender: Gender
      breed: Types.ObjectId
    }
    user: Types.ObjectId
  }): Promise<PostDocument> {
    return this.model.create(post).then((type) =>
      type.populate([
        { path: 'pet.breed', model: 'Breed' },
        { path: 'user.contact', model: 'Contact' },
        { path: 'user.location', model: 'Location' }
      ])
    )
  }

  save(id: string, post: { [key: string]: unknown }, query: FilterQuery<Post>): Promise<PostDocument | null> {
    return this.model
      .findByIdAndUpdate(id, post, query)
      .populate([
        { path: 'pet.breed', model: 'Breed' },
        { path: 'user.contact', model: 'Contact' },
        { path: 'user.location', model: 'Location' }
      ])
      .exec()
  }

  async remove(query: FilterQuery<Post>): Promise<number> {
    const { deletedCount: amount } = await this.model.deleteOne(query).exec()

    return amount
  }
}
