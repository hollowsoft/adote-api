import { Types } from 'mongoose'

import { Role } from '../type/role.enum'
import { SaveUserRequest } from '../user.request'

export class SaveUser {
  readonly name: string
  readonly description?: string
  readonly contact: {
    readonly phone?: string
    readonly social?: string
  }
  readonly location: Types.ObjectId

  constructor(user: SaveUserRequest) {
    const { contact, location } = user

    this.name = user.name
    this.description = user.description
    this.contact = {
      phone: contact?.phone,
      social: contact?.social
    }
    this.location = location.ObjectId // types.ObjectId
  }
}

export class CreateUser {
  readonly mail: string
  readonly name?: string
  readonly contact: {
    mail: string
  }
  readonly role?: Role

  constructor(mail: string, name?: string, role?: Role) {
    this.mail = mail
    this.name = name
    this.contact = {
      mail
    }
    this.role = role
  }
}
