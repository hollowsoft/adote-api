import { Injectable } from '@nestjs/common'

import { BreedRepository } from '@/module/breed/repository/breed.repository'
import { LocationRepository } from '@/module/location/repository/location.repository'
import { UserRepository } from '@/module/user/repository/user.repository'

import { SetBreedProvider } from './set.breed.provider'
import { SetLocationProvider } from './set.location.provider'
import { SetUserProvider } from './set.user.provider'

@Injectable()
export class ConfigurationProvider {
  readonly user: SetUserProvider
  readonly breed: SetBreedProvider
  readonly location: SetLocationProvider

  constructor(
    private readonly _user: UserRepository,
    private readonly _breed: BreedRepository,
    private readonly _location: LocationRepository
  ) {
    this.user = new SetUserProvider(this._user)
    this.breed = new SetBreedProvider(this._breed)
    this.location = new SetLocationProvider(this._location)
  }
}
