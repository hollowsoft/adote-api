import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model, Types } from 'mongoose'

import { User, type UserDocument } from '@/module/user/repository/user.schema'

@Injectable()
export class FavRepository {
  constructor(@InjectModel(User.name) private readonly model: Model<User>) {}

  save(post: Types.ObjectId, user: Types.ObjectId): Promise<UserDocument | null> {
    return this.model.findByIdAndUpdate(user, { $addToSet: { fav: post } }).exec()
  }

  remove(post: Types.ObjectId, user: Types.ObjectId): Promise<UserDocument | null> {
    return this.model.findByIdAndUpdate(user, { $pull: { fav: post } }).exec()
  }
}
