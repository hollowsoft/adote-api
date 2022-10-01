import { Injectable } from '@nestjs/common'

import { Kind } from '../entity/kind.entity'
import { Breed } from '../entity/breed.entity'

import { ListBreedService } from './list.breed.service'

@Injectable()
export class BreedService {
  constructor(private readonly LIST_BREED_SERVICE: ListBreedService) {}

  all(kind?: Kind): Promise<Breed[]> {
    return this.LIST_BREED_SERVICE.run(kind)
  }
}
