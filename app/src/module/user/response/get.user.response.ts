import { User } from '../entity/user.entity'

export class GetUserResponse {
  id: string
  create: Date
  mail: string

  constructor(user: User) {
    this.id = user.id
    this.create = user.create
    this.mail = user.mail
  }
}
