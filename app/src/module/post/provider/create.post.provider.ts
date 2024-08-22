import { InternalServerErrorException } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { PostResponse } from '../post.response'
import { CreatePostRequest } from '../post.request'

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
      const postResponse = await this.repository.save(post)

      return new PostResponse(
        postResponse._id,
        postResponse.name,
        postResponse.description,
        postResponse.image,
        {
          ...postResponse.pet,
          breed: {
            id: postResponse.pet.breed._id,
            name: postResponse.pet.breed.name
          }
        },
        {
          name: postResponse.user.name,
          image: postResponse.user.image,
          description: postResponse.user.image,
          contact: {
            mail: postResponse.user.contact.mail,
            phone: postResponse.user.contact.phone,
            social: postResponse.user.contact.social
          }
        },
        {
          id: postResponse.location._id,
          city: postResponse.location.city,
          state: postResponse.location.state
        }
      )
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
