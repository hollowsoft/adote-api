import { Injectable } from '@nestjs/common'

import { Fav } from '../entity/fav.entity'
import { FavRepository } from '../fav.repository'

@Injectable()
export class ListFavCase {
  constructor(private readonly repository: FavRepository) {}

  run(): Promise<Fav[]> {
    return this.repository.all({
      where: {
        
      }
    })
  }
}
