import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { Fav } from '../entity/fav.entity'
import { Post } from '../../post/entity/post.entity'
import { User } from '../../user/entity/user.entity'

import { FavRepository } from '../fav.repository'
import { PostRepository } from '../../post/post.repository'

import { AddFavRequest } from '../request'
import { AddFavResponse } from '../response'

import { isNil } from 'lodash'

@Injectable()
export class AddFavService {
  constructor(
    private readonly FAV_REPOSITORY: FavRepository,
    private readonly POST_REPOSITORY: PostRepository
  ) {}

  async run(request: AddFavRequest, user: string): Promise<AddFavResponse> {
    const { id } = request

    const post = await this.POST_REPOSITORY.find({
      where: {
        id
      }
    })

    if (isNil(post)) {
      throw new NotFoundException('post not found')
    }

    const find = await this.FAV_REPOSITORY.find({
      where: {
        post: {
          id
        },
        user: {
          id: user
        }
      }
    })

    if (isNil(find)) {
      const save = await this.FAV_REPOSITORY.save(new Fav({
        post: new Post({
          id
        }),
        user: new User({
          id: user
        })
      }))

      return new AddFavResponse(save)
    }

    return new AddFavResponse(find)
  }
}
