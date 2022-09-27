import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { Fav } from '../entity/fav.entity'
import { FavRepository } from '../fav.repository'

@Injectable()
export class RemoveFavCase {
  constructor(private readonly repository: FavRepository) {}

  run(id: string) {

  }
}
