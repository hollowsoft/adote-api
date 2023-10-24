import { SearchLocationRequest } from '../request'

import { LocationResponse } from '../response'

export interface ILocationService {
  search(request: SearchLocationRequest): Promise<LocationResponse[]>
}
