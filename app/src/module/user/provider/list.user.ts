import { Injectable } from '@nestjs/common'

import { UserResponse } from '../user.response'
import { ListUserRequest } from '../user.request'

import { UserRepository } from '../user.repository'

@Injectable()
export class ListUser {
  constructor(private readonly repository: UserRepository) {}

  async run(request: ListUserRequest): Promise<UserResponse[]> {
    const { enable } = request

    const list = await this.repository.list()

    return list.map((user) => ({
      id: 'user.id',
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
    }))
  }
}
