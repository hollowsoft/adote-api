import { AddFavRequest } from '../fav.request'

import { FavRepository } from '../fav.repository'
import { Types } from 'mongoose'

export class AddFavProvider {
  constructor(private readonly repository: FavRepository) {}

  async run(request: AddFavRequest, user: string): Promise<void> {
    const { post } = request

    await this.repository.save(new Types.ObjectId(post), new Types.ObjectId(user))
  }
}
