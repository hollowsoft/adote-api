import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model, type FilterQuery } from 'mongoose'

import { User, type UserDocument } from './user.schema'

import type { Role } from '../type/role.enum'

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  list(query: FilterQuery<User>): Promise<UserDocument[]> {
    return this.model.find(query).exec()
  }

  find(query: FilterQuery<User>): Promise<UserDocument | null> {
    return this.model.findOne(query).exec()
  }

  create(user: {
    mail: string
    name?: string
    contact: { mail: string }
    role?: Role
  }): Promise<UserDocument> {
    return this.model.create(user)
  }

  save(id: string, user: { [key: string]: unknown }, query: FilterQuery<User>): Promise<UserDocument | null> {
    return this.model
      .findByIdAndUpdate(id, user, query)
      .populate([
        { path: 'contact', model: 'Contact' },
        { path: 'location', model: 'Location' }
      ])
      .exec()
  }

  async remove(query: FilterQuery<User>): Promise<number> {
    const { deletedCount: amount } = await this.model.deleteOne(query).exec()

    return amount
  }
}
