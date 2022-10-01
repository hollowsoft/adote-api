import { Injectable } from '@nestjs/common'

import { SearchLocationService } from './search.location.service'

import { SearchLocationRequest } from '../request'
import { SearchLocationResponse } from '../response'

@Injectable()
export class LocationService {
  constructor(
    private readonly SEARCH_LOCATION_SERVICE: SearchLocationService
  ) {}

  search(request: SearchLocationRequest): Promise<SearchLocationResponse[]> {
    return this.SEARCH_LOCATION_SERVICE.run(request)
  }
}
