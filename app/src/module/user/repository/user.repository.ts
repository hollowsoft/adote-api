import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model, mongo, type FilterQuery } from 'mongoose'

import { CreateAdmin, CreateUser, SaveUser } from './user.model'
import { User, type UserDocument } from './user.schema'

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  list(query: FilterQuery<User>): Promise<UserDocument[]> {
    return this.model.find(query).exec()
  }

  find(query: FilterQuery<User>): Promise<UserDocument | null> {
    return this.model.findOne(query).exec()
  }

  create(user: CreateUser): Promise<UserDocument> {
    return this.model.create(user)
  }

  admin(user: CreateAdmin): Promise<UserDocument> {
    return this.model.create(user)
  }

  save(user: SaveUser, query: FilterQuery<User>): Promise<UserDocument | null> {
    return this.model
      .findOneAndUpdate(query, user)
      .populate([
        { path: 'contact', model: 'Contact' },
        { path: 'location', model: 'Location' }
      ])
      .exec()
  }

  remove(query: FilterQuery<User>): Promise<mongo.DeleteResult> {
    return this.model.deleteOne(query).exec()
  }
}
