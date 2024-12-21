import type { UserCurrent } from '@/type/auth.type'

import { FavRepository } from '../repository/fav.repository'

export class RemoveFavProvider {
  constructor(private readonly repository: FavRepository) {}

  async run(post: string, user: UserCurrent): Promise<void> {
    await this.repository.save(post.ObjectId, { _id: user.id })
  }
}
