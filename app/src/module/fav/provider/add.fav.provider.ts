import { InternalServerErrorException } from '@nestjs/common'

import { Types } from 'mongoose'

import { UserToken } from '@/type/auth.type'

import { FavRepository } from '../fav.repository'

import { AddFavRequest } from '../fav.request'

export class AddFavProvider {
  constructor(private readonly repository: FavRepository) {}

  async run(request: AddFavRequest, user: UserToken): Promise<void> {
    const { id } = request

    try {
      await this.repository.save(new Types.ObjectId(id), { _id: user.id })
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
