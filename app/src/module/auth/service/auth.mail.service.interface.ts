import { AuthMailRequest } from '../request'

import { AuthMailResponse } from '../response'

export interface IAuthMailService {
  run(request: AuthMailRequest): Promise<AuthMailResponse>
}
