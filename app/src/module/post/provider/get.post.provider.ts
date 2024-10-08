import { NotFoundException } from '@nestjs/common'

import { isNil } from 'lodash'

import { PostResponse } from '../post.response'
import { PostRepository } from '../repository/post.repository'

export class GetPostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string): Promise<PostResponse> {
    const post = await this.repository.find({})

    if (isNil(post)) {
      throw new NotFoundException('post not found')
    }

    return {} as PostResponse

    // return {
    //   id: post.name,
    //   title: post.name,
    //   description: post.description,
    //   image: post.image,
    //   pet: {
    //     name: post.pet.name,
    //     age: post.pet.age,
    //     size: post.pet.size,
    //     gender: post.pet.gender,
    //     breed: {
    //       id: post.pet.breed.name,
    //       name: post.pet.breed.name
    //     }
    //   },
    //   location: {
    //     id: '',
    //     city: '',
    //     state: ''
    //   },
    //   user: {
    //     name: post.user.name,
    //     image: post.user.image,
    //     description: post.user.description,
    //     contact: {
    //       mail: post.user.contact.mail,
    //       phone: post.user.contact.phone,

    //       social: post.user.contact.social
    //     }
    //   }
    // }
  }
}
