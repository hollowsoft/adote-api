import { PostRepository } from '../post.repository'

import { PatchPostRequest } from '../post.request'
import { PostResponse } from '../post.response'

export class PatchPostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string, request: PatchPostRequest): Promise<PostResponse> {
    const post = await this.repository.save()

    return {
      id: '',
      title: '',
      description: post.description,
      image: post.image,
      pet: {
        name: post.pet.name,
        age: post.pet.age,
        size: post.pet.size,
        gender: post.pet.gender,
        breed: {
          id: '',
          name: post.pet.breed.name
        }
      },
      location: {
        id: '',
        city: '',
        state: ''
      },
      user: {
        name: post.user.name,
        image: post.user.image,
        description: post.user.description,
        contact: {
          mail: post.user.contact.mail,
          phone: post.user.contact.phone,
          social: post.user.contact.social
        }
      }
    }
  }
}