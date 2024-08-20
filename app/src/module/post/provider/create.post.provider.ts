import { InternalServerErrorException } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { LocationResponse, PetResponse, PostResponse, UserResponse } from '../post.response'
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
        new PetResponse(post.pet.name, post.pet.age, post.pet.size, post.pet.gender, post.pet.breed),
        new UserResponse(post.user.name, post.user.image, post.user.description, post.user.contact),
        new LocationResponse(post.location._id, post.location.city, post.location.state)
      )
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
