import { PostRepository } from '../post.repository'

import { PostResponse } from '../post.response'
import { CreatePostRequest } from '../post.request'
import { User } from '@/module/user/user.type'
import { Pet } from '../post.type'
import { Location } from '@/module/location/location.type'

export class CreatePostProvider {
  constructor(private readonly repository: PostRepository) {}

  async run(request: CreatePostRequest): Promise<PostResponse> {
    const postResponse = await this.repository.save({
      ...request,
      id: '',
      name: '',
      user: new User(),
      pet: new Pet(),
      location: new Location(),
      publish: true
    })

    return {
      ...postResponse,
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
        city: '',
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
