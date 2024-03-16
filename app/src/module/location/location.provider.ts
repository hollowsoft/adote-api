import { Injectable } from '@nestjs/common'

import { SearchLocation } from './provider'

import { LocationRepository } from './location.respository'

export enum Action {
  SearchLocation
}

@Injectable()
export class LocationProvider {
  action: [SearchLocation]

  constructor(private readonly repository: LocationRepository) {
    this.action = [new SearchLocation(this.repository)]
  }
}
