import { REQUEST } from '@nestjs/core'

import { Scope, Inject, Injectable } from '@nestjs/common'

import { FastifyRequest } from 'fastify'

import { UserRepository } from '../user.repository'

@Injectable({ scope: Scope.REQUEST })
export class AddImage {
  constructor(
    private readonly repository: UserRepository,
    @Inject(REQUEST) private request: FastifyRequest
  ) {}

  run(): Promise<void> {
    return Promise.resolve()
  }
}
