import { REQUEST } from '@nestjs/core'

import { Scope, Inject, Injectable } from '@nestjs/common'

import { FastifyRequest } from 'fastify'

import { Size, Gender } from '@/module/post/post.type'

import { FavResponse } from '../fav.response'

// import { FavRepository } from '../fav.repository'

@Injectable({ scope: Scope.REQUEST })
export class ListFav {
  constructor(@Inject(REQUEST) private readonly request: FastifyRequest) {}

  async run(): Promise<FavResponse[]> {
    // const list = await this.repository.list({
    //   where: {
    //     user
    //   }
    // })

    // const list = await this.repository.list()

    return [].map((fav) => ({
      id: '1',
      create: '',
      title: '',
      image: [],
      pet: {
        name: '',
        age: [1, 1],
        size: Size.Large,
        gender: Gender.Female
      },
      location: {
        city: '',
        state: ''
      }
    }))
  }
}
