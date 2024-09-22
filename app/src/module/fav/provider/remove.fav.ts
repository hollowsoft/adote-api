import { InternalServerErrorException } from '@nestjs/common'

import { UserCurrent } from '@/type/auth.type'

import { FavRepository } from '../fav.repository'
import { RemoveFavRequest } from '../fav.request'

export class RemoveFavProvider {
  constructor(private readonly repository: FavRepository) {}

  async run(request: RemoveFavRequest, user: UserCurrent): Promise<void> {
    const { id } = request

    try {
      await this.repository.remove(id, { _id: user.id })
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
