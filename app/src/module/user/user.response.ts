import { Contact, UserDocument } from './repository/user.schema'

import { LocationDocument } from '../location/location.type'

export class UserResponse {
  readonly id: string
  readonly mail: string
  readonly name: string
  readonly image: string
  readonly description: string
  readonly contact: ContactResponse
  readonly location: LocationResponse

  constructor(user: UserDocument) {
    this.id = user.id
    this.mail = user.mail
    this.name = user.name
    this.image = user.image
    this.description = user.description
    this.contact = new ContactResponse(user.contact)
    this.location = new LocationResponse(user.location)
  }
}

class ContactResponse {
  readonly mail: string
  readonly phone: string
  readonly social: string

  constructor(contact: Contact) {
    this.mail = contact.mail
    this.phone = contact.phone
    this.social = contact.social
  }
}

class LocationResponse {
  readonly id: string
  readonly city: string
  readonly state: string

  constructor(location: LocationDocument) {
    this.id = location.id
    this.city = location.city
    this.state = location.state
  }
}
