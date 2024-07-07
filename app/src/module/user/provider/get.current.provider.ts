import { UserRepository } from '../user.repository'

import { UserResponse } from '../user.response'

export class GetCurrentProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(): Promise<UserResponse> {
    const user = await this.repository.find()

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
