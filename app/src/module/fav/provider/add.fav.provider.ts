import { AddFavRequest } from '../fav.request'
import { AddFavResponse } from '../fav.response'

import { FavRepository } from '../fav.repository'
import { Types } from 'mongoose'

export class AddFavProvider {
  constructor(private readonly repository: FavRepository) {}

  async run(request: AddFavRequest, user: string): Promise<AddFavResponse> {
    const { post } = request

    await this.repository.save(post, new Types.ObjectId(user))

    return new AddFavResponse(204)
  }
}
