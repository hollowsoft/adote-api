import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { User, UserDocument } from '@/module/user/user.type'

@Injectable()
export class FavRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  save(post: string, id: string): Promise<UserDocument> {
    return new this.model({ id: id }).save()
  }

  remove(id: string): Promise<User> {
    return this.model.findByIdAndDelete('').exec()
  }
}
