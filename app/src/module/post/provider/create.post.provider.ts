import { InternalServerErrorException } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { PostResponse } from '../post.response'
import { CreatePostRequest } from '../post.request'

export class CreatePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: CreatePostRequest, user: string): Promise<PostResponse> {
    try {
      const post = await this.repository.save(Object.assign(request, { user }))

      console.log(post)

      return {
        id: post._id,
        title: post.name,
        description: post.description,
        image: post.image,
        pet: {
          ...post.pet,
          breed: {
            id: post.pet.breed._id,
            name: post.pet.name
          }
        },
        user: {
          name: post.user.name,
          image: post.user.image,
          description: post.user.description,
          contact: {
            mail: post.user.contact.mail,
            phone: post.user.contact.phone,
            social: post.user.contact.mail
          }
        },
        location: {
          id: post.location._id,
          city: post.location.city,
          state: post.location.state
        }
      }
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
