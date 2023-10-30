import { ListBreedRequest } from '../request'

import { BreedResponse } from '../response'

export interface IListBreedService {
  run(request: ListBreedRequest): Promise<BreedResponse[]>
}
