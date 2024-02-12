import { Injectable } from '@nestjs/common'

import { Size } from 'src/module/post/size.enum'
import { Gender } from 'src/module/post/gender.enum'

import { FavResponse } from '../fav.response'

import { FavRepository } from '../fav.repository'

@Injectable()
export class ListFav {
  constructor(private readonly repository: FavRepository) {}

  async run(user: string): Promise<FavResponse[]> {
    // const list = await this.repository.all({
    //   where: {
    //     user
    //   }
    // })

    const list = await this.repository.all()

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
