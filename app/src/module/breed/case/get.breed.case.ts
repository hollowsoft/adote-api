import { Injectable } from '@nestjs/common'

import { Kind } from '../entity/kind.entity'
import { Breed } from '../entity/breed.entity'

import { BreedRepository } from '../breed.repository'

@Injectable()
export class GetBreedCase {
  constructor(private readonly repository: BreedRepository) {}

  run(kind?: Kind): Promise<Breed[]> {
    return this.repository.find(kind)
  }
}
