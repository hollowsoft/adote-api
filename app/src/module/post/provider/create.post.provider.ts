import { PostRepository } from '../post.repository'

import { PostResponse } from '../post.response'
import { CreatePostRequest } from '../post.request'
import { User } from '@/module/user/user.type'
import { Pet } from '../post.type'
import { Location } from '@/module/location/location.type'

export class CreatePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: CreatePostRequest): Promise<PostResponse> {
    const post = await this.repository.save({
      ...request,
      id: '',
      name: '',
      user: new User(),
      pet: new Pet(),
      location: new Location(),
      publish: true
    })

    return {
      ...post,
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
