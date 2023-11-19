export class AuthResponse {
  constructor(
    readonly id: string,
    readonly mail: string
  ) {}
}

export class TokenResponse {
  constructor(
    readonly token: string,
    readonly renew: string
  ) {}
}
