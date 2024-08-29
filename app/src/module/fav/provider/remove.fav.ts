import { RemoveFavRequest } from '../fav.request'
import { FavRepository } from '../fav.repository'
import { Types } from 'mongoose'
import { UserToken } from '@/type/auth.type'
import { InternalServerErrorException } from '@nestjs/common'

export class RemoveFavProvider {
  constructor(readonly repository: FavRepository) {}

  async run(request: RemoveFavRequest, user: UserToken): Promise<void> {
    const { id } = request

    try {
      await this.repository.remove(new Types.ObjectId(id), { _id: user.id })
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
