import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { RemovePostRequest } from '../request'

import { isNil } from 'lodash'

@Injectable()
export class RemovePostService {
  constructor(private readonly repository: PostRepository) {}

  async run(request: RemovePostRequest, user: string): Promise<void> {
    const { id } = request

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
    
    await this.repository.remove(find)
  }
}
