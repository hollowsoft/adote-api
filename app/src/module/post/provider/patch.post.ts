import { Injectable } from '@nestjs/common'

import { Post } from '../post.entity'
import { PostRepository } from '../post.repository'

import { PostResponse } from '../post.response'
import { UpdatePostRequest } from '../post.request'

@Injectable()
export class PatchPost {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string, request: UpdatePostRequest, user: string): Promise<PostResponse> {
    const post = await this.repository.save(request as any)

    return {
      id: post.id,
      title: post.title,
      description: post.description,
      image: post.image,
      pet: {
        name: post.pet.name,
        age: post.pet.age,
        size: post.pet.size,
        gender: post.pet.gender,
        breed: {
          id: post.pet.breed.id,
          name: post.pet.breed.name
        }
      },
      location: {
        id: post.location.id,
        city: post.location.city,
        state: post.location.state
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
