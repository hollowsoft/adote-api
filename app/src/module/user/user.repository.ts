import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { FilterQuery, Model, mongo, Types } from 'mongoose'

import { PatchUser } from './patch.user.model'
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

  update(query: FilterQuery<User>, user: PatchUser): Promise<UserDocument> {
    return this.model
      .findOneAndUpdate(query, user)
      .populate([
        { path: 'contact', model: 'Contact' },
        { path: 'location', model: 'Location' }
      ])
      .exec()
  }

  remove(query: FilterQuery<User>): Promise<mongo.DeleteResult> {
    return this.model.deleteMany(query).exec()
  }
}
