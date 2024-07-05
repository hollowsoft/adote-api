import { Injectable } from '@nestjs/common'
import { LoadLocation } from './provider/load.configuration'
import { LocationRepository } from '../location/location.respository'

export enum Action {
  LoadLocation
}

@Injectable()
export class ConfigurationProvider {
  action: [LoadLocation]

  constructor(private readonly repository: LocationRepository) {
    this.action = [new LoadLocation(this.repository)]
  }
}
