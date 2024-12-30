import { Injectable } from '@nestjs/common'

import { LocationRepository } from '@/module/location/repository/location.repository'

import Location from '@/location.json'

@Injectable()
export class SetLocationProvider {
  constructor(private readonly repository: LocationRepository) {}

  async run(): Promise<void> {
    await this.repository.remove({})

    await this.repository.create(Location)
  }
}
