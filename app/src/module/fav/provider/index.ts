import { Injectable } from '@nestjs/common'

import { AddFav } from './add.fav'
import { ListFav } from './list.fav'
import { RemoveFav } from './remove.fav'

import { FavRepository } from '../fav.repository'

@Injectable()
export class FavProvider {
  readonly add: AddFav = new AddFav(this.repository)
  readonly list: ListFav = new ListFav()
  readonly remove: RemoveFav = new RemoveFav()

  constructor(private readonly repository: FavRepository) {}
}
