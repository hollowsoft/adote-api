import { Injectable } from '@nestjs/common'

import location from '@/module/location/location.json'
import { LocationRepository } from '@/module/location/location.repository'

@Injectable()
export class SetLocationProvider {
  constructor(private repository: LocationRepository) {}

  async run(): Promise<void> {
    await this.repository.remove()

    await this.repository.save(location)
  }
}
