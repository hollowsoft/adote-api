import { Injectable } from '@nestjs/common'

import { AddFavProvider } from './add.fav.provider'
import { RemoveFavProvider } from './remove.fav.provider'

import { FavRepository } from '../repository/fav.repository'

@Injectable()
export class FavProvider {
  readonly add: AddFavProvider
  readonly remove: RemoveFavProvider

  constructor(private readonly repository: FavRepository) {
    this.add = new AddFavProvider(this.repository)
    this.remove = new RemoveFavProvider(this.repository)
  }
}
