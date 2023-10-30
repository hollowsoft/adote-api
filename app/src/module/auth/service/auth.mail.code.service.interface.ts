import { AuthMailCodeRequest } from '../request'

import { AuthResponse } from '../response'

export interface IAuthMailCodeService {
  run(request: AuthMailCodeRequest): Promise<AuthResponse>
}
