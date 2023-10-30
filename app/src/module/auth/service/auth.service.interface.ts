import { AuthMailRequest, AuthMailCodeRequest } from '../request'

import { AuthResponse, AuthMailResponse } from '../response'

export interface IAuthService {
  mail(request: AuthMailRequest): Promise<AuthMailResponse>

  code(request: AuthMailCodeRequest): Promise<AuthResponse>

  token(id: string): Promise<AuthResponse>
}
