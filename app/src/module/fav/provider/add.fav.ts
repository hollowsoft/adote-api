import { AddFavRequest } from '../fav.request'
import { AddFavResponse } from '../fav.response'

import { FavRepository } from '../fav.repository'

export class AddFav {
  constructor(private readonly repository: FavRepository) {}

  async run(request: AddFavRequest): Promise<AddFavResponse> {
    const { post } = request

    // const fav = await this.repository.save({} as any)

    return {
      id: ''
    }
  }
}
