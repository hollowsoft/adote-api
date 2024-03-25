import { Injectable } from '@nestjs/common'

import { User } from '@/type/token.type'
import { Size, Gender } from '@/module/post/post.type'

import { FavResponse } from '../fav.response'

import { FavRepository } from '../fav.repository'

@Injectable()
export class ListFav {
  constructor(private readonly repository: FavRepository) {}

  async run(user: User): Promise<FavResponse[]> {
    // const list = await this.repository.list({
    //   where: {
    //     user
    //   }
    // })

    const list = await this.repository.list()

    return list.map((fav) => ({
      id: '1',
      create: '',
      title: '',
      image: [],
      pet: {
        name: '',
        age: [1, 1],
        size: Size.Large,
        gender: Gender.Female
      },
      location: {
        city: '',
        state: ''
      }
    }))
  }
}
