import { Injectable } from '@nestjs/common'

import { PostResponse } from '../post.response'
import { ListPostRequest } from '../post.request'

import { PostRepository } from '../post.repository'

@Injectable()
export class ListPostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: ListPostRequest): Promise<PostResponse[]> {
    const { size } = request

    const list = await this.repository.list()

    return list.map((post) => ({
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
    }))
  }
}
