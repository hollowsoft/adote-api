import { Injectable } from '@nestjs/common'

import { Kind } from './entity/kind.entity'
import { Breed } from './entity/breed.entity'

import { GetBreedCase } from './case/get.breed.case'

@Injectable()
export class BreedService {
  constructor(private readonly GET: GetBreedCase) {}

  get(kind?: Kind): Promise<Breed[]> {
    return this.GET.run(kind)
  }
}
