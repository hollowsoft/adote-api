import { Injectable } from '@nestjs/common'

import { UserResponse } from '../user.response'

import { UserRepository } from '../user.repository'

@Injectable()
export class GetCurrent {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string): Promise<UserResponse> {
    const user = await this.repository.find({
      where: { id }
    })

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
