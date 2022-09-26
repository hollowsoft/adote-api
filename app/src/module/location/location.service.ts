import { Injectable } from '@nestjs/common'

import { City } from './entity/city.entity'

import { SearchLocationCase } from './case/search.location.case'

@Injectable()
export class LocationService {
  constructor(
    private readonly SEARCH_LOCATION_CASE: SearchLocationCase
  ) {}

  search(term?: string): Promise<City[]> {
    return this.SEARCH_LOCATION_CASE.run(term)
  }
}
