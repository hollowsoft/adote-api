import { User } from '../entity/user.entity'

export class ListUserResponse {
  readonly id: string
  readonly create: Date
  readonly mail: string
  readonly name: string
  readonly image: string
  readonly enable: boolean
  
  constructor(user: User) {
    this.id = user.id
    this.create = user.create
    this.mail = user.mail
    this.name = user.name
    this.image = user.image
    this.enable = user.enable
  }
}
