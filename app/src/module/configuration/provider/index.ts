import { Injectable } from '@nestjs/common'

import { SetLocation } from './set.location'

import { LocationRepository } from '@/module/location/location.respository'

@Injectable()
export class ConfigurationProvider {
  readonly location: SetLocation = new SetLocation(this.repository)

  constructor(private readonly repository: LocationRepository) {}
}
