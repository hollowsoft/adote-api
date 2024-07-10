import { Injectable } from '@nestjs/common'

import location from '@/module/location/location.json'

import { LocationRepository } from '@/module/location/location.respository'

@Injectable()
export class SetLocation {
  constructor(private repository: LocationRepository) {}

  async run() {
    await this.repository.remove()

    await this.repository.save(location)
  }
}
