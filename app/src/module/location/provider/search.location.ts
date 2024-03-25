import { Injectable } from '@nestjs/common'

import { SearchLocationRequest } from '../location.request'
import { LocationResponse } from '../location.response'

import { LocationRepository } from '../location.respository'

@Injectable()
export class SearchLocation {
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
