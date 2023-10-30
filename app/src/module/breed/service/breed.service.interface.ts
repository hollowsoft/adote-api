import { ListBreedRequest } from '../request'

import { BreedResponse } from '../response'

export interface IBreedService {
  all(request: ListBreedRequest): Promise<BreedResponse[]>
}
