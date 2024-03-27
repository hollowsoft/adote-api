import { REQUEST } from '@nestjs/core'

import { Scope, Inject, Injectable, NotFoundException } from '@nestjs/common'

import { FastifyRequest } from 'fastify'

import { PostRepository } from '../post.repository'

import { isNil } from 'lodash'

@Injectable({ scope: Scope.REQUEST })
export class RemovePost {
  constructor(
    private readonly repository: PostRepository,
    @Inject(REQUEST) private request: FastifyRequest
  ) {}

  async run(id: string): Promise<void> {
    const post = await this.repository.find()

    if (isNil(post)) {
      throw new NotFoundException('post not found')
    }

    await this.repository.remove()
  }
}
