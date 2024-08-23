import { UserDocument } from '../user/user.type'

export class AuthResponse {
  readonly id: string
  readonly mail: string

  constructor(user: UserDocument) {
    this.id = user.id
    this.mail = user.mail
  }
}

export class TokenResponse {
  constructor(
    readonly token: string,
    readonly renew: string
  ) {}
}
