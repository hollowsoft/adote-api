import { Injectable } from '@nestjs/common'

import { ListBreed } from './provider'

import { BreedRepository } from './breed.repository'

export enum Action {
  ListBreed
}

@Injectable()
export class BreedProvider {
  action: [ListBreed]

  constructor(private readonly repository: BreedRepository) {
    this.action = [new ListBreed(this.repository)]
  }
}
