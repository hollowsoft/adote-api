import { Injectable } from '@nestjs/common'

import { User } from '@/type/token.type'

import { PostResponse } from '../post.response'
import { CreatePostRequest } from '../post.request'

import { PostRepository } from '../post.repository'

@Injectable()
export class CreatePost {
  constructor(private readonly repository: PostRepository) {}

  async run(request: CreatePostRequest, user: User): Promise<PostResponse> {
    const post = await this.repository.find()

    return {
      id: '',
      title: post.name,
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
