import { Injectable } from '@nestjs/common'

import { City } from './entity/city.entity'

import { SearchLocationCase } from './case/search.location.case'

@Injectable()
export class LocationService {
  constructor(private readonly SEARCH: SearchLocationCase) {}

  search(term: string): Promise<City[]> {
    return this.SEARCH.run(term)
  }
}
