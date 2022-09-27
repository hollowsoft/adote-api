import {
  Injectable,
  NotFoundException,
} from '@nestjs/common'

import { Fav } from '../entity/fav.entity'
import { FavRepository } from '../fav.repository'

@Injectable()
export class AddFavCase {
  constructor(private readonly repository: FavRepository) {}

  run(post: string, user: string): Promise<Fav> {
    return this.repository.save(new Fav({
      
    }))
  }
}
