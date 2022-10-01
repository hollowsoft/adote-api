import { Injectable } from '@nestjs/common'

import { Fav } from '../entity/fav.entity'

import { AddFavService } from './add.fav.service'
import { ListFavService } from './list.fav.service'
import { RemoveFavService } from './remove.fav.service'

@Injectable()
export class FavService {
  constructor(
    private readonly ADD_FAV_SERVICE: AddFavService,
    private readonly LIST_FAV_SERVICE: ListFavService,
    private readonly REMOVE_FAV_SERVICE: RemoveFavService
  ) {}

  all(): Promise<Fav[]> {
    return this.LIST_FAV_SERVICE.run()
  }

  add() {
    return this.ADD_FAV_SERVICE.run('', '')
  }

  remove(id: string) {
    return this.REMOVE_FAV_SERVICE.run(id)
  }
}
