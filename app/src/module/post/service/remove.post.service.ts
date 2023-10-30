import { Injectable, NotFoundException } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { RemovePostRequest } from '../request'

import { isNil } from 'lodash'

import { IRemovePostService } from './remove.post.service.interface'

@Injectable()
export class RemovePostService implements IRemovePostService {
  constructor(private readonly repository: PostRepository) {}

  async run(request: RemovePostRequest, user: string): Promise<void> {
    const { id } = request

    const post = await this.repository.find({
      where: {
        id,
        user: {
          id: user,
        },
      },
    })

    if (isNil(post)) {
      throw new NotFoundException('post not found')
    }

    await this.repository.remove(post)
  }
}
