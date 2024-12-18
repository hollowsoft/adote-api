import { UserCurrent } from '@/type/auth.type'

import { AddFavRequest } from '../fav.request'
import { FavRepository } from '../repository/fav.repository'

export class AddFavProvider {
  constructor(private readonly repository: FavRepository) {}

  async run(request: AddFavRequest, user: UserCurrent): Promise<void> {
    const { post } = request

    await this.repository.save(post.ObjectId, { _id: user.id })
  }
}
