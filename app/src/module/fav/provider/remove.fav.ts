import { Injectable, NotFoundException } from '@nestjs/common'

import { User } from '@/type/token.type'

import { FavRepository } from '../fav.repository'

import { RemoveFavRequest } from '../fav.request'

@Injectable()
export class RemoveFav {
  constructor(private readonly repository: FavRepository) {}

  async run(request: RemoveFavRequest, user: User): Promise<void> {
    const { id } = request
  }
}
