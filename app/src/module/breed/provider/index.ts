import { Injectable } from '@nestjs/common'

import { ListBreed } from './list.breed'

export enum Action {
  List
}

export { ListBreed }

@Injectable()
export class BreedProvider {
  action: [ListBreed]

  constructor(private readonly list: ListBreed) {
    this.action = [this.list]
  }
}
