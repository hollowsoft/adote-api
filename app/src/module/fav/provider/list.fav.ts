import { Size, Gender } from '@/module/post/post.type'

import { FavResponse } from '../fav.response'

// import { FavRepository } from '../fav.repository'

export class ListFav {
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
