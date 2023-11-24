import { Injectable } from '@nestjs/common'

import { Post } from '../entity/post.entity'

import { Pet } from '../entity/pet/pet.entity'

import { Breed } from '../../breed/breed.entity'

import { City } from '../../location/entity/city.entity'

import { User } from '../../user/user.entity'

import { PostRepository } from '../post.repository'

import { CreatePostRequest } from '../request'

import { PostResponse } from '../response'

import { ICreatePostService } from './create.post.service.interface'

@Injectable()
export class CreatePostService implements ICreatePostService {
  constructor(private readonly repository: PostRepository) {}

  async run(request: CreatePostRequest, user: string): Promise<PostResponse> {
    const { id } = await this.repository.save(this.build(request, user))

    const post = await this.repository.find({
      where: {
        id
      },
      relations: ['pet.breed', 'city.state', 'user.contact']
    })

    return new PostResponse(post)
  }

  build(request: CreatePostRequest, user: string): Post {
    const { pet } = request

    return new Post({
      title: request.title,
      description: request.description,
      image: request.image,
      pet: new Pet({
        name: pet.name,
        age: pet.age,
        size: pet.size,
        gender: pet.gender,
        breed: new Breed({
          id: pet.breed
        })
      }),
      city: new City({
        id: request.location
      }),
      user: new User({
        id: user
      })
    })
  }
}
