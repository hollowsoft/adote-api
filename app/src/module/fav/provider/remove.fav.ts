import { InternalServerErrorException } from '@nestjs/common'

import { UserCurrent } from '@/type/auth.type'

import { FavRepository } from '../repository/fav.repository'

export class RemoveFavProvider {
  constructor(private readonly repository: FavRepository) {}

  async run(id: string, user: UserCurrent): Promise<void> {
    try {
      await this.repository.remove(id, { _id: user.id })
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
