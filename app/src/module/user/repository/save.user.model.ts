import { Types } from 'mongoose'

import { ContactRequest, PatchUserRequest } from '../user.request'

class SaveContact {
  readonly mail: string
  readonly phone: string
  readonly social: string

  constructor(contact: ContactRequest) {
    this.mail = contact.mail
    this.phone = contact.phone
    this.social = contact.social
  }
}

export class CreateUser {
  readonly mail: string

  constructor(mail: string) {
    this.mail = mail
  }
}

export class SaveUser {
  readonly name: string
  readonly description?: string
  readonly contact?: ContactRequest
  readonly location: Types.ObjectId

  constructor(user: PatchUserRequest) {
    this.name = user.name
    this.description = user.description
    this.contact = new SaveContact(user.contact)
    this.location = new Types.ObjectId(user.location)
  }
}
