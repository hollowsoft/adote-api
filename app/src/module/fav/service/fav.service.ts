import { Injectable } from '@nestjs/common'

import { AddFavService } from './add.fav.service'
import { ListFavService } from './list.fav.service'
import { RemoveFavService } from './remove.fav.service'

import {
  AddFavRequest,
  RemoveFavRequest
} from '../request'

import {
  AddFavResponse,
  ListFavResponse
} from '../response'

@Injectable()
export class FavService {
  constructor(
    private readonly ADD_FAV_SERVICE: AddFavService,
    private readonly LIST_FAV_SERVICE: ListFavService,
    private readonly REMOVE_FAV_SERVICE: RemoveFavService
  ) {}

  all(user: string): Promise<ListFavResponse[]> {
    return this.LIST_FAV_SERVICE.run(user)
  }

  add(request: AddFavRequest, user: string): Promise<AddFavResponse> {
    return this.ADD_FAV_SERVICE.run(request, user)
  }

  remove(request: RemoveFavRequest, user: string): Promise<void> {
    return this.REMOVE_FAV_SERVICE.run(request, user)
  }
}
