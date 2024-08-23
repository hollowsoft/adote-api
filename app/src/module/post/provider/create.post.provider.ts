import { InternalServerErrorException } from '@nestjs/common'

import { PostRepository } from '../post.repository'

import { PostResponse } from '../post.response'
import { CreatePostRequest } from '../post.request'

export class CreatePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: CreatePostRequest, user: string): Promise<PostResponse> {
    const post1 = Object.assign(request, { user })

    try {
      const post = await this.repository.save(post1)

      console.log(post)

      return {
        id: post.id,
        title: post.name,
        description: post.description,
        image: post.image,
        pet: {
          name: post.pet.name,
          age: post.pet.age,
          size: post.pet.size,
          gender: post.pet.gender,
          breed: post.pet.breed
            ? {
                id: post.pet.breed.id,
                name: post.pet.name
              }
            : { id: '', name: '' }
        },
        user: post.user
          ? {
              name: post.user.name,
              image: post.user.image,
              description: post.user.description,
              contact: post.user.contact
                ? {
                    mail: post.user.contact.mail,
                    phone: post.user.contact.phone,
                    social: post.user.contact.mail
                  }
                : {
                    mail: '',
                    phone: '',
                    social: ''
                  }
            }
          : {
              name: '',
              image: '',
              description: '',
              contact: {
                mail: '',
                phone: '',
                social: ''
              }
            },
        location: post.location
          ? {
              id: post.location.id,
              city: post.location.city,
              state: post.location.state
            }
          : {
              id: '',
              city: '',
              state: ''
            }
      }
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
