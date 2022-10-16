import { Injectable } from '@nestjs/common'

import { FavRepository } from '../fav.repository'

import { ListFavRequest } from '../request'
import { ListFavResponse } from '../response'

@Injectable()
export class ListFavService {
  constructor(private readonly repository: FavRepository) {}

  async run(request: ListFavRequest): Promise<ListFavResponse[]> {
    const list = await this.repository.all({
      where: {
        
      }
    })

    return list.map(() => new ListFavResponse())
  }
}
