import { User } from '../entity/user.entity'

export class ListUserResponse {
  id: string
  create: Date
  mail: string
  name: string
  image: string
  enable: boolean
  
  constructor(user: User) {
    this.id = user.id
    this.create = user.create
    this.mail = user.mail
    this.name = user.name
    this.image = user.image
    this.enable = user.enable
  }
}
