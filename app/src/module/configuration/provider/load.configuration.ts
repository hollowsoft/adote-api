import { Injectable } from '@nestjs/common'
import { LocationRepository } from '@/module/location/location.respository'
import { Location } from '@/module/location/location.type'

@Injectable()
export class LoadLocation {
  constructor(private repository: LocationRepository) {}

  async run(): Promise<void> {
    const location: Location[] = require('../../../../location.json')

    await this.repository.delete({})

    await this.repository.saveMany(location)
  }
}
