import { InternalServerErrorException } from '@nestjs/common'

import { UserCurrent } from '@/type/auth.type'

import { AddFavRequest } from '../fav.request'
import { FavRepository } from '../repository/fav.repository'

export class AddFavProvider {
  constructor(private readonly repository: FavRepository) {}

  async run(request: AddFavRequest, user: UserCurrent): Promise<void> {
    const { id } = request

    try {
      await this.repository.save(id, { _id: user.id })
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
