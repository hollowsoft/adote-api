import { Injectable } from '@nestjs/common'

import { UserRepository } from '../repository/user.repository'
import { ListUserRequest } from '../user.request'
import { UserResponse } from '../user.response'

@Injectable()
export class ListUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(request: ListUserRequest): Promise<UserResponse[]> {
    const { enable } = request

    const list = await this.repository.list({})

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
