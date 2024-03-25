import { Injectable } from '@nestjs/common'

import { User } from '@/type/token.type'

import { PostRepository } from '../post.repository'

import { PatchPostRequest } from '../post.request'
import { PostResponse } from '../post.response'

@Injectable()
export class PatchPost {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string, request: PatchPostRequest, user: User): Promise<PostResponse> {
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
