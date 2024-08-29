import { RemoveFavRequest } from '../fav.request'
import { FavRepository } from '../fav.repository'
import { Types } from 'mongoose'

export class RemoveFavProvider {
  constructor(readonly repository: FavRepository) {}

  async run(request: RemoveFavRequest, user: string): Promise<void> {
    const { id } = request

    await this.repository.remove(new Types.ObjectId(id), { user })
  }
}
