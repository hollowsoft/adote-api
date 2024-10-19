import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { FilterQuery, Model, Types } from 'mongoose'

import { User, UserDocument } from '@/module/user/repository/user.schema'

@Injectable()
export class FavRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  save(post: Types.ObjectId, query: FilterQuery<User>): Promise<UserDocument> {
    return this.model.findOneAndUpdate(query, { fav: { $ne: post } }).exec()
  }

  remove(id: Types.ObjectId, query: FilterQuery<User>): Promise<UserDocument> {
    return this.model.findOneAndUpdate(query, { $pull: { fav: id } }).exec()
  }
}
