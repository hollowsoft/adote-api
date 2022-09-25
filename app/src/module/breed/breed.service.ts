import { Injectable } from '@nestjs/common'

import { Kind } from './entity/kind.entity'
import { Breed } from './entity/breed.entity'

import { ListBreedCase } from './case/list.breed.case'

@Injectable()
export class BreedService {
  constructor(private readonly LIST_BREED_CASE: ListBreedCase) {}

  all(kind?: Kind): Promise<Breed[]> {
    return this.LIST_BREED_CASE.run(kind)
  }
}
