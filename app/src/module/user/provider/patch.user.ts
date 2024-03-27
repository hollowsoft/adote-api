import { REQUEST } from '@nestjs/core'

import { Scope, Inject, Injectable } from '@nestjs/common'

import { FastifyRequest } from 'fastify'

import { UserRepository } from '../user.repository'

import { UserResponse } from '../user.response'
import { PatchUserRequest } from '../user.request'

@Injectable({ scope: Scope.REQUEST })
export class PatchUser {
  constructor(
    private readonly repository: UserRepository,
    @Inject(REQUEST) private request: FastifyRequest
  ) {}

  async run(request: PatchUserRequest): Promise<UserResponse> {
    const user = await this.repository.save()

    return {
      id: '',
      mail: user.mail,
      name: user.name,
      image: user.image,
      description: user.description,
      contact: {
        mail: user.contact.mail,
        phone: user.contact.phone,
        social: user.contact.social
      },
      location: {
        id: '',
        city: user.location.city,
        state: user.location.state
      }
    }
  }
}
