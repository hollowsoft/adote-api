import { AddFavRequest } from '../fav.request'
import { AddFavResponse } from '../fav.response'

import { FavRepository } from '../fav.repository'

export class AddFavProvider {
  constructor(private readonly repository: FavRepository) {}

  async run(request: AddFavRequest, user: string): Promise<AddFavResponse> {
    const { post } = request

    const fav = await this.repository.save(post, user)

    return new AddFavResponse(fav._id)
  }
}
