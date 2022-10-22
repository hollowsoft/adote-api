import { Fav } from '../entity/fav.entity'

export class AddFavResponse {
  readonly id: string

  constructor(fav: Fav) {
    this.id = fav.id
  }
}
