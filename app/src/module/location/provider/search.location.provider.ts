import { Injectable } from '@nestjs/common'

import { LocationRepository } from '../location.repository'
import { SearchLocationRequest } from '../location.request'
import { LocationResponse } from '../location.response'

@Injectable()
export class SearchLocationProvider {
  constructor(private readonly repository: LocationRepository) {}

  async run(request: SearchLocationRequest): Promise<LocationResponse[]> {
    const { term } = request

    const list = await this.repository.list()

    return list.map((location) => ({
      id: '',
      city: location.city,
      state: location.state
    }))
  }
}
