import { Injectable, NotFoundException } from '@nestjs/common'

import { FavRepository } from '../fav.repository'

import { RemoveFavRequest } from '../fav.request'

@Injectable()
export class RemoveFav {
  constructor(private readonly repository: FavRepository) {}

  async run(request: RemoveFavRequest, user: string): Promise<void> {
    const { id } = request

    const fav = await this.repository.find({ where: { id, user } })

    if (fav) {
      await this.repository.remove(fav)
    }
  }
}
