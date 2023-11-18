import { ILike } from 'typeorm'

import { LocationResponse } from '../location.response'
import { SearchLocationRequest } from '../location.request'

import { LocationRepository } from '../location.respository'

export class SearchLocation {
  constructor(private readonly repository: LocationRepository) {}

  async run(request: SearchLocationRequest): Promise<LocationResponse[]> {
    const { term } = request

    const list = await this.repository.all({
      where: {
        city: ILike(`${term}%`)
      }
    })

    return list.map((location) => ({
      id: location.id,
      city: location.city,
      state: location.state
    }))
  }
}
