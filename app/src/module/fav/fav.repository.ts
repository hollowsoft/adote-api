import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model, Types, FilterQuery } from 'mongoose'

import { User, UserDocument } from '@/module/user/user.type'

@Injectable()
export class FavRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  save(post: Types.ObjectId, query?: FilterQuery<User>): Promise<UserDocument> {
    return this.model.findOneAndUpdate(query, { fav: { $ne: post } }).exec()
  }

  remove(id: string): Promise<User> {
    return this.model.findByIdAndDelete('').exec()
  }
}
