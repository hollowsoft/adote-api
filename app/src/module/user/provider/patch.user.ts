import { Injectable } from '@nestjs/common'

import { User } from '@/type/token.type'

import { UserResponse } from '../user.response'
import { PatchUserRequest } from '../user.request'

import { UserRepository } from '../user.repository'

@Injectable()
export class PatchUser {
  constructor(private readonly repository: UserRepository) {}

  async run(request: PatchUserRequest, auth: User): Promise<UserResponse> {
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
