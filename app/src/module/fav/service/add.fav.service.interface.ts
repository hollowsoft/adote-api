import { AddFavRequest } from '../request'

import { AddFavResponse } from '../response'

export interface IAddFavService {
  run(request: AddFavRequest, user: string): Promise<AddFavResponse>
}
