import { Injectable } from '@nestjs/common'

import { SearchLocation } from './search.location'

export enum Action {
  Search
}

@Injectable()
export class LocationProvider {
  action: [SearchLocation]

  constructor(private readonly search: SearchLocation) {
    this.action = [this.search]
  }
}
