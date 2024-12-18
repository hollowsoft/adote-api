import { Injectable } from '@nestjs/common'

import { AddFavProvider } from './add.fav.provider'
import { RemoveFavProvider } from './remove.fav.provider'

import { FavRepository } from '../repository/fav.repository'

@Injectable()
export class FavProvider {
  readonly add: AddFavProvider = new AddFavProvider(this.repository)
  readonly remove: RemoveFavProvider = new RemoveFavProvider(this.repository)

  constructor(private readonly repository: FavRepository) {}
}
