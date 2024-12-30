import { BadRequestException } from '@nestjs/common'

import { isNil } from 'lodash'
import { Types } from 'mongoose'

import { SavePostRequest } from '../post.request'
import { PostResponse } from '../post.response'
import { PostRepository } from '../repository/post.repository'

export class SavePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string, request: SavePostRequest, user: string): Promise<PostResponse> {
    const { description, image, pet } = request

    const map: { [key: string]: unknown } = {
      'description': description,
      'image': image,
      'pet.name': pet.name,
      'pet.birth': pet.birth,
      'pet.size': pet.size,
      'pet.gender': pet.gender,
      'pet.breed': new Types.ObjectId(pet.breed),
      'user': new Types.ObjectId(user)
    }

    const post = await this.repository.save(id, map, { user: new Types.ObjectId(user) })

    if (isNil(post)) {
      throw new BadRequestException()
    }

    return new PostResponse(post)
  }
}
