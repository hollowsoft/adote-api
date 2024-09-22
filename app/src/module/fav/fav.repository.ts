import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { FilterQuery, Model, Types } from 'mongoose'

import { User, UserDocument } from '@/module/user/repository/user.schema'

@Injectable()
export class FavRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  save(post: string, query: FilterQuery<User>): Promise<UserDocument> {
    return this.model.findOneAndUpdate(query, { fav: { $ne: new Types.ObjectId(post) } }).exec()
  }

  remove(id: string, query: FilterQuery<User>): Promise<UserDocument> {
    return this.model.findOneAndUpdate(query, { $pull: { fav: new Types.ObjectId(id) } }).exec()
  }
}
