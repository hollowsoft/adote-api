import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { mongo, Model, FilterQuery } from 'mongoose'

import { User } from './user.type'

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  list(query?: FilterQuery<User>): Promise<User[]> {
    return this.model.find(query)
  }

  find(query?: FilterQuery<User>): Promise<User> {
    return this.model.findOne(query)
  }

  save(user: User): Promise<User> {
    return this.model.create(user)
  }

  remove(query?: FilterQuery<User>): Promise<mongo.DeleteResult> {
    return this.model.deleteMany(query)
  }
}
