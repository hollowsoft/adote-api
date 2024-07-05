import { Injectable } from '@nestjs/common'
import { LocationRepository } from '@/module/location/location.respository'
import { LocationResponse } from '@/module/location/location.response'

@Injectable()
export class LoadLocation {
  constructor(private repository: LocationRepository) {}

  async run(): Promise<LocationResponse[]> {
    const locations: {
      city: string
      state: string
    }[] = require('../../../../city.json')

    await this.repository.deleteAll()

    return await this.repository.saveMany(locations)
  }
}
