export class AuthMailCodeResponse {
  token: string
  refresh: string

  constructor(token: string, refresh: string) {
    this.token = token
    this.refresh = refresh
  }
}
