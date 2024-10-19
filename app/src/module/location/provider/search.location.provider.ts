import { SearchLocationRequest } from '../location.request'
import { LocationResponse } from '../location.response'
import { LocationRepository } from '../repository/location.repository'

export class SearchLocationProvider {
  constructor(private readonly repository: LocationRepository) {}

  async run(request: SearchLocationRequest): Promise<LocationResponse[]> {
    const { city } = request

    const list = await this.repository.list({
      city: {
        $regex: city,
        $options: 'i'
      }
    })

    return list.map((e) => new LocationResponse(e))
  }
}
