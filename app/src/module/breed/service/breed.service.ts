import { Injectable } from '@nestjs/common'

import { ListBreedService } from './list.breed.service'

import { ListBreedRequest } from '../request'

import { BreedResponse } from '../response'

import { IBreedService } from './breed.service.interface'

@Injectable()
export class BreedService implements IBreedService {
  constructor(private readonly LIST_BREED_SERVICE: ListBreedService) {}

  all(request: ListBreedRequest): Promise<BreedResponse[]> {
    return this.LIST_BREED_SERVICE.run(request)
  }
}
