import { Injectable } from '@nestjs/common'

import { ListBreedProvider } from './list.breed.provider'
import { BreedRepository } from '../breed.repository'

@Injectable()
export class BreedProvider {
  readonly list: ListBreedProvider = new ListBreedProvider(this.repository)

  constructor(private readonly repository: BreedRepository) {}
}
