import { Injectable } from '@nestjs/common'

import { LocationRepository } from '@/module/location/repository/location.repository'
import location from '@/module/location/type/location.json'

@Injectable()
export class SetLocationProvider {
  constructor(private repository: LocationRepository) {}

  async run(): Promise<void> {
    await this.repository.remove({})

    await this.repository.save(location)
  }
}
