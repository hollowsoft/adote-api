import { BadRequestException } from '@nestjs/common'

import { isNil } from 'lodash'

import type { UserCurrent } from '@/type/auth.type'

import { SavePostRequest } from '../post.request'
import { PostResponse } from '../post.response'
import { SavePost } from '../repository/post.model'
import { PostRepository } from '../repository/post.repository'

export class SavePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string, request: SavePostRequest, user: UserCurrent): Promise<PostResponse> {
    const post = await this.repository.save(new SavePost(request, user.id), {
      _id: id.ObjectId,
      user: user.id.ObjectId
    })

    if (isNil(post)) {
      throw new BadRequestException()
    }

    return new PostResponse(post)
  }
}
