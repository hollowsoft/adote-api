import { Injectable } from '@nestjs/common'

import { AddFavService } from './add.fav.service'
import { ListFavService } from './list.fav.service'
import { RemoveFavService } from './remove.fav.service'

import {
  AddFavRequest,
  ListFavRequest,
  RemoveFavRequest
} from '../request'

import {
  AddFavResponse,
  ListFavResponse,
  RemoveFavResponse
} from '../response'

@Injectable()
export class FavService {
  constructor(
    private readonly ADD_FAV_SERVICE: AddFavService,
    private readonly LIST_FAV_SERVICE: ListFavService,
    private readonly REMOVE_FAV_SERVICE: RemoveFavService
  ) {}

  all(request: ListFavRequest): Promise<ListFavResponse[]> {
    return this.LIST_FAV_SERVICE.run(request)
  }

  add(request: AddFavRequest): Promise<AddFavResponse> {
    return this.ADD_FAV_SERVICE.run(request)
  }

  remove(request: RemoveFavRequest): Promise<RemoveFavResponse> {
    return this.REMOVE_FAV_SERVICE.run(request)
  }
}
