import { REQUEST } from '@nestjs/core'

import { Scope, Inject, Injectable } from '@nestjs/common'

import { FastifyRequest } from 'fastify'

import { PostRepository } from '../post.repository'

import { PublishPostRequest } from '../post.request'
import { PublishPostResponse } from '../post.response'

@Injectable({ scope: Scope.REQUEST })
export class PublishPost {
  constructor(private readonly repository: PostRepository) {}

  async run(id: string, request: PublishPostRequest): Promise<PublishPostResponse> {
    const { publish } = request

    await this.repository.save()

    return {
      id,
      publish
    }
  }
}
