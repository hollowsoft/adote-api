import { RemoveFavRequest } from '../fav.request'

export class RemoveFavProvider {
  async run(request: RemoveFavRequest): Promise<void> {
    const { id } = request
  }
}
