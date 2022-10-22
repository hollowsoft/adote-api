import { Fav } from '../entity/fav.entity'

export class RemoveFavResponse {
  readonly id: string

  constructor(fav: Fav) {
    this.id = fav.id
  }
}
