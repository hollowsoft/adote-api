import { Injectable } from '@nestjs/common'

import { ListBreed } from './list.breed'
import { BreedRepository } from '../breed.repository'

@Injectable()
export class BreedProvider {
  readonly list: ListBreed = new ListBreed(this.repository)

  constructor(private readonly repository: BreedRepository) {}
}
