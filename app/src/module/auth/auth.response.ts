import type { UserDocument } from '../user/repository/user.schema'

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
