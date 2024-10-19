import { UserCurrent } from '@/type/auth.type'

import { FavRepository } from '../repository/fav.repository'

export class RemoveFavProvider {
  constructor(private readonly repository: FavRepository) {}

  async run(id: string, user: UserCurrent): Promise<void> {
    await this.repository.remove(id.ObjectId, { _id: user.id })
  }
}
