import { Injectable, NotFoundException } from '@nestjs/common'

import { UserResponse } from '../user.response'
import { GetUserRequest } from '../user.request'

import { UserRepository } from '../user.repository'

import { isNil } from 'lodash'

@Injectable()
export class GetUser {
  constructor(private readonly repository: UserRepository) {}

  async run(request: GetUserRequest): Promise<UserResponse> {
    const { id } = request

    const user = await this.repository.find({
      where: { id }
    })

    if (isNil(user)) {
      throw new NotFoundException('user not found')
    }

    return {
      id: user.id,
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
        id: user.location.id,
        city: user.location.city,
        state: user.location.state
      }
    }
  }
}
