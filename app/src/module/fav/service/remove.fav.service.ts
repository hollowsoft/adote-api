import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { FavRepository } from '../fav.repository'

import { RemoveFavRequest } from '../request'
import { RemoveFavResponse } from '../response'

@Injectable()
export class RemoveFavService {
  constructor(private readonly repository: FavRepository) {}

  async run(request: RemoveFavRequest): Promise<RemoveFavResponse> {
    return new RemoveFavResponse()
  }
}
