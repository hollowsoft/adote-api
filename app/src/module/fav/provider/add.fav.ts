import { REQUEST } from '@nestjs/core'

import { Scope, Inject, Injectable } from '@nestjs/common'

import { FastifyRequest } from 'fastify'

import { AddFavRequest } from '../fav.request'
import { AddFavResponse } from '../fav.response'

// import { FavRepository } from '../fav.repository'

@Injectable({ scope: Scope.REQUEST })
export class AddFav {
  constructor(@Inject(REQUEST) private readonly request: FastifyRequest) {}

  async run(request: AddFavRequest): Promise<AddFavResponse> {
    const { post } = request

    // const fav = await this.repository.save({} as any)

    return {
      id: ''
    }
  }
}
