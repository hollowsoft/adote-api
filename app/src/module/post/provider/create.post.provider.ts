import { PostRepository } from '../post.repository'

import { PostResponse } from '../post.response'
import { CreatePostRequest } from '../post.request'
import { User } from '@/module/user/user.type'
import { Kind } from '@/module/breed/breed.type'

export class CreatePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: CreatePostRequest): Promise<PostResponse> {
    const postResponse = await this.repository.save({
      ...request,
      name: '',
      user: new User(),
      pet: {
        name: request.pet.name,

        age: request.pet.age,

        size: request.pet.size,

        gender: request.pet.gender,

        breed: {
          id: '',
          name: request.pet.breed,
          kind: Kind.Cat
        }
      },
      location: {
        city: request.location,
        state: ''
      },
      publish: true
    })

    return {
      id: '',
      title: '',
      description: postResponse.description,
      image: postResponse.image,
      pet: {
        name: postResponse.pet.name,
        age: postResponse.pet.age,
        size: postResponse.pet.size,
        gender: postResponse.pet.gender,
        breed: {
          id: '',
          name: postResponse.pet.breed.name
        }
      },
      location: {
        id: '',
        city: postResponse.location.city,
        state: ''
      },
      user: {
        name: postResponse.user.name,
        image: postResponse.user.image,
        description: postResponse.user.description,
        contact: {
          mail: postResponse.user.contact.mail,
          phone: postResponse.user.contact.phone,
          social: postResponse.user.contact.social
        }
      }
    }
  }
}
