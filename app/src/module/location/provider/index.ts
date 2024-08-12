import { Injectable } from '@nestjs/common'

import { SearchLocationProvider } from './search.location.provider'
import { LocationRepository } from '../location.repository'

@Injectable()
export class LocationProvider {
  readonly search: SearchLocationProvider = new SearchLocationProvider(this.repository)

  constructor(private readonly repository: LocationRepository) {}
}
