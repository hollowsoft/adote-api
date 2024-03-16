import { Injectable } from '@nestjs/common'

import { ListFav, AddFav, RemoveFav } from './provider'

import { FavRepository } from './fav.repository'

export enum Action {
  ListFav,
  AddFav,
  RemoveFav
}

@Injectable()
export class FavProvider {
  action: [ListFav, AddFav, RemoveFav]

  constructor(private readonly repository: FavRepository) {
    this.action = [new ListFav(this.repository), new AddFav(this.repository), new RemoveFav(this.repository)]
  }
}
