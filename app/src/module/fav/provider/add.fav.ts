import { Injectable } from '@nestjs/common'

import { User } from '@/type/token.type'

import { AddFavRequest } from '../fav.request'
import { AddFavResponse } from '../fav.response'

// import { FavRepository } from '../fav.repository'

@Injectable()
export class AddFav {
  // constructor(private readonly repository: FavRepository) {}

  async run(request: AddFavRequest, user: User): Promise<AddFavResponse> {
    const { post } = request

    // const fav = await this.repository.save({} as any)

    return {
      id: ''
    }
  }
}
