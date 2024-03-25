import { Injectable } from '@nestjs/common'

import { AddFav } from './add.fav'
import { ListFav } from './list.fav'
import { RemoveFav } from './remove.fav'

export enum Action {
  Add,
  List,
  Remove
}

export { AddFav, ListFav, RemoveFav }

@Injectable()
export class FavProvider {
  action: [AddFav, ListFav, RemoveFav]

  constructor(
    private readonly add: AddFav,
    private readonly list: ListFav,
    private readonly remove: RemoveFav
  ) {
    this.action = [this.add, this.list, this.remove]
  }
}
