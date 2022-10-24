import { Injectable } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { ListPostRequest } from '../request'
import { ListPostResponse } from '../response'

@Injectable()
export class ListPostService {
  constructor(private readonly repository: PostRepository) {}

  async run(request: ListPostRequest): Promise<ListPostResponse[]> {
    const { size } = request

    const list = await this.repository.all({
      where: {
        pet: {
          size
        }
      },
      relations: [
        'pet.breed',
        'city.state',
        'user.contact'
      ]
    })

    return list.map((post) => new ListPostResponse(post))
  }
}
