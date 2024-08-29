import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { mongo, Model, FilterQuery, Types } from 'mongoose'

import { User, UserDocument } from './user.type'

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  list(query?: FilterQuery<User>): Promise<UserDocument[]> {
    return this.model.find(query).exec()
  }

  find(query?: FilterQuery<User>): Promise<UserDocument> {
    return this.model.findOne(query).exec()
  }

  save(user: User): Promise<UserDocument> {
    return this.model.create(user)
  }

  update(user: User, query?: FilterQuery<User>): Promise<UserDocument> {
    return this.model.findOneAndUpdate(query, user).exec()
  }

  remove(query?: FilterQuery<User>): Promise<mongo.DeleteResult> {
    return this.model.deleteMany(query).exec()
  }
}
