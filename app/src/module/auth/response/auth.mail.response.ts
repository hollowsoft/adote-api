import { User } from '../../user/entity/user.entity'

export class AuthMailResponse {
  id: string
  create: Date
  mail: string

  constructor(user: User) {
    this.id = user.id
    this.create = user.create
    this.mail = user.mail
  }
}
