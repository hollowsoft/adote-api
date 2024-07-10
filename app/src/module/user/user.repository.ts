import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { FilterQuery, Model, mongo } from 'mongoose'

import { User } from './user.type'

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  list(): Promise<User[]> {
    return this.model.find().exec()
  }

  find(): Promise<User> {
    return this.model.findById('').exec()
  }

  save(): Promise<User> {
    return new this.model({}).save()
  }

  remove(query?: FilterQuery<User>): Promise<mongo.DeleteResult> {
    return this.model.deleteMany(query)
  }

  saveMany(user: User[]): Promise<User[]> {
    return this.model.insertMany(user)
  }
}
