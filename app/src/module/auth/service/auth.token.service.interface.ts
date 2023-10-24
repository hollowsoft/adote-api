import { AuthResponse } from '../response'

export interface IAuthTokenService {
  run(id: string): Promise<AuthResponse>
}
