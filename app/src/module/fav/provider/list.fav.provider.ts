import { Gender } from '@/module/post/type/gender.enum'
import { Size } from '@/module/post/type/size.enum'

import { FavResponse } from '../fav.response'

// import { FavRepository } from '../fav.repository'

export class ListFavProvider {
  constructor() {}

  async run(): Promise<FavResponse[]> {
    // const list = await this.repository.list({
    //   where: {
    //     user
    //   }
    // })

    // const list = await this.repository.list()

    return [].map((fav) => ({
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
