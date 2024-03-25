import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

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
}
