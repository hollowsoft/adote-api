import { Types } from 'mongoose'

import { Role } from '../type/role.enum'
import { SaveUserRequest } from '../user.request'

export class CreateUser {
  readonly mail: string
  readonly contact: {
    mail: string
  }

  constructor(mail: string) {
    this.mail = mail
    this.contact = {
      mail
    }
  }
}

export class CreateAdmin {
  readonly mail: string
  readonly name: string
  readonly contact: {
    mail: string
  }
  readonly role: Role = Role.ADMIN

  constructor(mail: string, name: string) {
    this.mail = mail
    this.name = name
    this.contact = {
      mail
    }
  }
}

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
    this.location = location.ObjectId
  }
}
