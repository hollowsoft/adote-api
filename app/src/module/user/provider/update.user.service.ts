import { Injectable } from '@nestjs/common'

import { UserResponse } from '../user.response'
import { UpdateUserRequest } from '../user.request'

import { UserRepository } from '../user.repository'

@Injectable()
export class UpdateUser {
  constructor(private readonly repository: UserRepository) {}

  async run(request: UpdateUserRequest, id: string): Promise<UserResponse> {
    const user = await this.repository.save({} as any)

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
