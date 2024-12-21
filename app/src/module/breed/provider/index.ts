import { Injectable } from '@nestjs/common'

import { ListBreedProvider } from './list.breed.provider'

import { BreedRepository } from '../repository/breed.repository'

@Injectable()
export class BreedProvider {
  readonly list: ListBreedProvider

  constructor(private readonly repository: BreedRepository) {
    this.list = new ListBreedProvider(this.repository)
  }
}
