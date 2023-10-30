import { AddFavRequest, RemoveFavRequest } from '../request'

import { FavResponse, AddFavResponse } from '../response'

export interface IFavService {
  all(user: string): Promise<FavResponse[]>

  add(request: AddFavRequest, user: string): Promise<AddFavResponse>

  remove(request: RemoveFavRequest, user: string): Promise<void>
}
