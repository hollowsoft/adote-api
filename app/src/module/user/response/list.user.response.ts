import { User } from '../entity/user.entity'

export class ListUserResponse {
  readonly create: Date
  readonly mail: string
  readonly name: string
  readonly image: string
  readonly description: string
  readonly location: LocationResponse
  readonly contact: ContactResponse

  constructor(user: User) {
    const { city, contact } = user

    const { state } = city ?? {}

    this.create = user.create
    this.mail = user.mail
    this.name = user.name
    this.image = user.image
    this.description = user.description
    this.contact = contact && {
      mail: contact.mail,
      phone: contact.phone,
      social: contact.social
    }
    this.location = city && {
      id: city.id,
      city: city.pt,
      state: state.pt
    }
  }
}

class ContactResponse {
  readonly mail: string
  readonly phone: string
  readonly social: string
}

class LocationResponse {
  readonly id: string
  readonly city: string
  readonly state: string
}
