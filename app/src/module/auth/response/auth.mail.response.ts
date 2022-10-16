import { User } from '../../user/entity/user.entity'

export class AuthMailResponse {
  readonly id: string
  readonly create: Date
  readonly mail: string

  constructor(user: User) {
    this.id = user.id
    this.create = user.create
    this.mail = user.mail
  }
}
