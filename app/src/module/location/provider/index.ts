import { Injectable } from '@nestjs/common'

import { SearchLocation } from './search.location'
import { LocationRepository } from '../location.respository'

@Injectable()
export class LocationProvider {
  readonly search: SearchLocation = new SearchLocation(this.repository)

  constructor(private readonly repository: LocationRepository) {}
}
