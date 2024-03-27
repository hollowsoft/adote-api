import { REQUEST } from '@nestjs/core'

import { Scope, Inject, Injectable } from '@nestjs/common'

import { FastifyRequest } from 'fastify'

import { RemoveFavRequest } from '../fav.request'

@Injectable({ scope: Scope.REQUEST })
export class RemoveFav {
  constructor(@Inject(REQUEST) private readonly request: FastifyRequest) {}

  async run(request: RemoveFavRequest): Promise<void> {
    const { id } = request
  }
}
