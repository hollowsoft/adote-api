import { SearchLocationRequest } from '../request'

import { LocationResponse } from '../response'

export interface ISearchLocationService {
  run(request: SearchLocationRequest): Promise<LocationResponse[]>
}
