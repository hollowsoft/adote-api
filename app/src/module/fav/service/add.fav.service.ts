import {
  Injectable
} from '@nestjs/common'

import { Fav } from '../entity/fav.entity'
import { FavRepository } from '../fav.repository'

import { AddFavRequest } from '../request'
import { AddFavResponse } from '../response'

@Injectable()
export class AddFavService {
  constructor(private readonly repository: FavRepository) {}

  async run(request: AddFavRequest): Promise<AddFavResponse> {
    const fav = await this.repository.save(new Fav({
      
    }))

    return new AddFavResponse()
  }
}
