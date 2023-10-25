import { Injectable, NotFoundException } from '@nestjs/common'

import { Post } from '../entity/post.entity'

import { Pet } from '../entity/pet/pet.entity'

import { Breed } from '../../breed/entity/breed.entity'

import { City } from '../../location/entity/city.entity'

import { PostRepository } from '../post.repository'

import { UpdatePostParam, UpdatePostRequest } from '../request'

import { PostResponse } from '../response'

import { isNil } from 'lodash'

import { IUpdatePostService } from './update.post.service.interface'

@Injectable()
export class UpdatePostService implements IUpdatePostService {
  constructor(private readonly repository: PostRepository) {}

  async run(
    param: UpdatePostParam,
    request: UpdatePostRequest,
    user: string,
  ): Promise<PostResponse> {
    const { id } = param

    const find = await this.repository.find({
      where: {
        id,
        user: {
          id: user,
        },
      },
      relations: ['pet'],
    })

    if (isNil(find)) {
      throw new NotFoundException('post not found')
    }

    const { pet } = find

    await this.repository.save(this.build(id, pet.id, request))

    const post = await this.repository.find({
      where: {
        id,
      },
      relations: ['pet.breed', 'city.state', 'user.contact'],
    })

    return new PostResponse(post)
  }

  private toPet(id: string, request: UpdatePostRequest): Pet {
    const { pet } = request

    return new Pet({
      id,
      name: pet.name,
      age: pet.age,
      size: pet.size,
      gender: pet.gender,
      breed: new Breed({
        id: pet.breed,
      }),
    })
  }

  private build(
    id: string,
    pet: string,
    request: UpdatePostRequest,
  ): Post {
    return new Post({
      id,
      title: request.title,
      description: request.description,
      image: request.image,
      pet: this.toPet(pet, request),
      city: new City({
        id: request.location,
      }),
    })
  }
}
