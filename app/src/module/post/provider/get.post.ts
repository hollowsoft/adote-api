import { Injectable, NotFoundException } from '@nestjs/common'

import { PostResponse } from '../post.response'
import { GetPostRequest } from '../post.request'

import { PostRepository } from '../post.repository'

import { isNil } from 'lodash'

@Injectable()
export class GetPost {
  constructor(private readonly repository: PostRepository) {}

  async run(request: GetPostRequest): Promise<PostResponse> {
    const { id } = request

    const post = await this.repository.find({
      where: { id }
    })

    if (isNil(post)) {
      throw new NotFoundException('post not found')
    }

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
