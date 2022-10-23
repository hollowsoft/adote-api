import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { Post } from '../entity/post.entity'
import { PostRepository } from '../post.repository'

import {
  PublishPostParam,
  PublishPostRequest
} from '../request'

import { PublishPostResponse } from '../response'

import { isNil } from 'lodash'

@Injectable()
export class PublishPostService {
  constructor(private readonly repository: PostRepository) {}

  async run(param: PublishPostParam, request: PublishPostRequest, user: string): Promise<PublishPostResponse> {
    const { id } = param
    const { publish } = request

    const find = await this.repository.find({
      where: {
        id,
        user: {
          id: user
        }
      }
    })

    if (isNil(find)) {
      throw new NotFoundException('post not found')
    }

    const post = await this.repository.save(new Post({
      id,
      publish
    }))

    return new PublishPostResponse(post)
  }
}
