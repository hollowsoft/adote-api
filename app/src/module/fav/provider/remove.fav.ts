import { RemoveFavRequest } from '../fav.request'

export class RemoveFav {
  async run(request: RemoveFavRequest): Promise<void> {
    const { id } = request
  }
}
