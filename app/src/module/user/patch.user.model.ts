import { Types } from 'mongoose'
import { ContactRequest, PatchUserRequest } from './user.request'

class PatchContact {
  readonly mail: string
  readonly phone: string
  readonly social: string

  constructor(contact: ContactRequest) {
    this.mail = contact.mail
    this.phone = contact.phone
    this.social = contact.social
  }
}

export class PatchUser {
  readonly name: string
  readonly description?: string
  readonly contact?: ContactRequest
  readonly location: Types.ObjectId

  constructor(user: PatchUserRequest) {
    this.name = user.name
    this.description = user.description
    this.contact = new PatchContact(user.contact)
    this.location = new Types.ObjectId(user.location)
  }
}
