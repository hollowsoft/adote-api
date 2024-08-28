import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model, Types } from 'mongoose'

import { User, UserDocument } from '@/module/user/user.type'

@Injectable()
export class FavRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  save(post: Types.ObjectId, user: Types.ObjectId): Promise<UserDocument> {
    return this.model.findOneAndUpdate(user, { $push: { fav: post } }, { new: true }).exec()
  }

  remove(id: string): Promise<User> {
    return this.model.findByIdAndDelete('').exec()
  }
}
