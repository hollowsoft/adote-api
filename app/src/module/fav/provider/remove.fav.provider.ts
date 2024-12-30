import { Types } from 'mongoose'

import { FavRepository } from '../repository/fav.repository'

export class RemoveFavProvider {
  constructor(private readonly repository: FavRepository) {}

  async run(post: string, user: string): Promise<void> {
    await this.repository.save(new Types.ObjectId(post), new Types.ObjectId(user))
  }
}
