import { Injectable } from '@nestjs/common'

import { FavRepository } from '../fav.repository'

import { FavResponse } from '../response'

@Injectable()
export class ListFavService {
  constructor(private readonly repository: FavRepository) {}

  async run(user: string): Promise<FavResponse[]> {
    const list = await this.repository.all({
      where: {
        user: {
          id: user
        }
      },
      relations: [
        'post.pet',
        'post.city.state'
      ]
    })

    return list.map(({ post }) => new FavResponse(post))
  }
}
