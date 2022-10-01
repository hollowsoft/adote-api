import { Injectable } from '@nestjs/common'

import { Fav } from './entity/fav.entity'

import { ListFavCase } from './case/list.fav.case'
import { AddFavCase } from './case/add.fav.case'
import { RemoveFavCase } from './case/remove.fav.case'

@Injectable()
export class FavService {
  constructor(
    private readonly LIST_FAV_CASE: ListFavCase,
    private readonly ADD_FAV_CASE: AddFavCase,
    private readonly REMOVE_FAV_CASE: RemoveFavCase
  ) {}

  all(): Promise<Fav[]> {
    return this.LIST_FAV_CASE.run()
  }

  add() {
    return this.ADD_FAV_CASE.run('', '')
  }

  remove(id: string) {
    return this.REMOVE_FAV_CASE.run(id)
  }
}
