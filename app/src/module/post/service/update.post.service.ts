import {
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { Post } from '../entity/post.entity'
import { Pet } from '../entity/pet/pet.entity'
import { Breed } from '../../breed/entity/breed.entity'

import { City } from '../../location/entity/city.entity'

import { PostRepository } from '../post.repository'

import {
  UpdatePostParam,
  UpdatePostRequest
} from '../request'

import { UpdatePostResponse } from '../response'

import { isNil } from 'lodash'

@Injectable()
export class UpdatePostService {
  constructor(private readonly repository: PostRepository) {}

  async run(param: UpdatePostParam, request: UpdatePostRequest, user: string): Promise<UpdatePostResponse> {
    const { id } = param

    const find = await this.repository.find({
      where: {
        id,
        user: {
          id: user
        }
      },
      relations: [
        'pet'
      ]
    })

    if (isNil(find)) {
      throw new NotFoundException('post not found')
    }

    const { pet: { id: pet } } = find

    await this.repository.save(this.build(id, pet, request))

    const post = await this.repository.find({
      where: {
        id
      },
      relations: [
        'pet.breed',
        'city.state'
      ]
    })

    return new UpdatePostResponse(post)
  }

  toPet(id: string, request: UpdatePostRequest): Pet {
    const { pet } = request

    return new Pet({
      id,
      name: pet.name,
      age: pet.age,
      size: pet.size,
      gender: pet.gender,
      breed: new Breed({
        id: pet.breed
      })
    })
  }

  build(id: string, pet: string, request: UpdatePostRequest): Post {
    return new Post({
      id,
      title: request.title,
      description: request.description,
      image: request.image,
      pet: this.toPet(pet, request),
      city: new City({
        id: request.location
      })
    })
  }
}
