import { Injectable } from '@nestjs/common'

import { SearchLocationService } from './search.location.service'

import { SearchLocationRequest } from '../request'

import { LocationResponse } from '../response'

import { ILocationService } from './location.service.interface'

@Injectable()
export class LocationService implements ILocationService {
  constructor(
    private readonly SEARCH_LOCATION_SERVICE: SearchLocationService,
  ) {}

  search(request: SearchLocationRequest): Promise<LocationResponse[]> {
    return this.SEARCH_LOCATION_SERVICE.run(request)
  }
}
