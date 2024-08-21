import { InternalServerErrorException } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { PostResponse } from '../post.response'
import { CreatePostRequest } from '../post.request'
import { Post } from '../post.type'
import { Document } from 'mongoose'

export class CreatePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: CreatePostRequest, user: string): Promise<PostResponse> {
    const post = {
      ...request,
      user: user,
      location: request.location,
      pet: { ...request.pet, breed: request.pet.breed }
    }

    try {
      const savedPost = (await this.repository.save(post)) as Post & Document

      console.log(savedPost)

      return new PostResponse(
        savedPost._id,
        savedPost.name,
        savedPost.description,
        savedPost.image,
        {
          ...savedPost.pet,
          breed: {
            id: '',
            name: savedPost.pet.breed.name
          }
        },
        {
          name: savedPost.user.name,
          image: savedPost.user.image,
          description: savedPost.user.image,
          contact: {
            mail: savedPost.user.contact.mail,
            phone: savedPost.user.contact.phone,
            social: savedPost.user.contact.social
          }
        },
        {
          id: '',
          city: savedPost.location.city,
          state: savedPost.location.state
        }
      )
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
