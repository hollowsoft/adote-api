import { Injectable } from '@nestjs/common'

import { AddFavProvider } from './add.fav.provider'
import { ListFavProvider } from './list.fav.provider'
import { RemoveFavProvider } from './remove.fav'

import { FavRepository } from '../fav.repository'

@Injectable()
export class FavProvider {
  readonly add: AddFavProvider = new AddFavProvider(this.repository)
  readonly list: ListFavProvider = new ListFavProvider()
  readonly remove: RemoveFavProvider = new RemoveFavProvider()

  constructor(private readonly repository: FavRepository) {}
}
