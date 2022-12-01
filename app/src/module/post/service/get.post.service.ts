import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { GetPostRequest } from '../request'

import { PostResponse } from '../response'

import { isNil } from 'lodash'

@Injectable()
export class GetPostService {
  constructor(private readonly repository: PostRepository) {}

  async run(request: GetPostRequest): Promise<PostResponse> {
    const { id } = request

    const post = await this.repository.find({
      where: {
        id
      },
      relations: [
        'pet.breed',
        'city.state',
        'user.contact'
      ]
    })

    if (isNil(post)) {
      throw new NotFoundException('post not found')
    }

    return new PostResponse(post)
  }
}
