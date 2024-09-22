import { Injectable, NotFoundException } from '@nestjs/common'

import { isNil } from 'lodash'

import { UserRepository } from '../user.repository'
import { UserResponse } from '../user.response'

@Injectable()
export class GetUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string): Promise<UserResponse> {
    const user = await this.repository.find({})

    if (isNil(user)) {
      throw new NotFoundException('user not found')
    }

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
