import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model, Types, type FilterQuery } from 'mongoose'

import { User, type UserDocument } from '@/module/user/repository/user.schema'

@Injectable()
export class FavRepository {
  constructor(@InjectModel(User.name) private readonly model: Model<User>) {}

  save(post: Types.ObjectId, query: FilterQuery<User>): Promise<UserDocument | null> {
    return this.model.findOneAndUpdate(query, { fav: { $ne: post } }).exec()
  }

  remove(post: Types.ObjectId, query: FilterQuery<User>): Promise<UserDocument | null> {
    return this.model.findOneAndUpdate(query, { $pull: { fav: post } }).exec()
  }
}
