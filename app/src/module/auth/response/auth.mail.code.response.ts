export class AuthMailCodeResponse {
  readonly token: string
  readonly refresh: string

  constructor(token: string, refresh: string) {
    this.token = token
    this.refresh = refresh
  }
}
