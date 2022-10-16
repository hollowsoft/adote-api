import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { Post } from '../entity/post.entity'
import { PostRepository } from '../post.repository'

import { RemovePostRequest } from '../request'
import { RemovePostResponse } from '../response'

import { isNil } from 'lodash'

@Injectable()
export class RemovePostService {
  constructor(private readonly repository: PostRepository) {}

  async run(request: RemovePostRequest): Promise<RemovePostResponse> {
    const { id } = request

    const post = await this.repository.remove(new Post({
      id
    }))

    if (isNil(post)) {
      throw new NotFoundException('post not found')
    }

    return new RemovePostResponse(post)
  }
}
