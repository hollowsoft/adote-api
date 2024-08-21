import { InternalServerErrorException } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { PostResponse } from '../post.response'
import { CreatePostRequest } from '../post.request'
import { Post } from '../post.type'
import { Document } from 'mongoose'

export class CreatePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: CreatePostRequest, user: string): Promise<PostResponse> {
    try {
      const post = (await this.repository.save(Object.assign(request, { user }))) as Post & Document

      return new PostResponse(
        post._id,
        post.name,
        post.description,
        post.image,
        post.pet,
        post.user,
        post.location
      )
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
