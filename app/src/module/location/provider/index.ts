import { Injectable } from '@nestjs/common'

import { SearchLocationProvider } from './search.location.provider'

import { LocationRepository } from '../repository/location.repository'

@Injectable()
export class LocationProvider {
  readonly search: SearchLocationProvider

  constructor(private readonly repository: LocationRepository) {
    this.search = new SearchLocationProvider(this.repository)
  }
}
