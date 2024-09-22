import { Injectable } from '@nestjs/common'

import { BreedRepository } from '@/module/breed/repository/breed.repository'
import { LocationRepository } from '@/module/location/location.repository'
import { UserRepository } from '@/module/user/repository/user.repository'

import { SetBreedProvider } from './set.breed.provider'
import { SetLocationProvider } from './set.location.provider'
import { SetUserProvider } from './set.user.provider'

@Injectable()
export class ConfigurationProvider {
  readonly user: SetUserProvider = new SetUserProvider(this._user)
  readonly breed: SetBreedProvider = new SetBreedProvider(this._breed)
  readonly location: SetLocationProvider = new SetLocationProvider(this._location)

  constructor(
    private readonly _user: UserRepository,
    private readonly _breed: BreedRepository,
    private readonly _location: LocationRepository
  ) {}
}
