import { Injectable } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { ListPostRequest } from '../request'

import { PostResponse } from '../response'

import { IListPostService } from './list.post.service.interface'

@Injectable()
export class ListPostService implements IListPostService {
  constructor(private readonly repository: PostRepository) {}

  async run(request: ListPostRequest): Promise<PostResponse[]> {
    const { size } = request

    const list = await this.repository.all({
      where: {
        pet: {
          size,
        },
      },
      relations: ['pet.breed', 'city.state', 'user.contact'],
    })

    return list.map((post) => new PostResponse(post))
  }
}
