import { Injectable } from '@nestjs/common'

import { AddFav } from './add.fav'
import { ListFav } from './list.fav'
import { RemoveFav } from './remove.fav'

export enum Action {
  Add,
  List,
  Remove
}

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
