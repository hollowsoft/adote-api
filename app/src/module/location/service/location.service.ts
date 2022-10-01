import { Injectable } from '@nestjs/common'

import { City } from '../entity/city.entity'

import { SearchLocationService } from './search.location.service'

@Injectable()
export class LocationService {
  constructor(
    private readonly SEARCH_LOCATION_SERVICE: SearchLocationService
  ) {}

  search(term?: string): Promise<City[]> {
    return this.SEARCH_LOCATION_SERVICE.run(term)
  }
}
