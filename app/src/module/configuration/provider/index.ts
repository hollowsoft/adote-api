import { Injectable } from '@nestjs/common'

import { SetUserProvider } from './set.user.provider'
import { SetLocationProvider } from './set.location.provider'

import { UserRepository } from '@/module/user/user.repository'
import { LocationRepository } from '@/module/location/location.respository'
import { BreedRepository } from '@/module/breed/breed.repository'
import { SetBreedProvider } from './set.breed.provider'

@Injectable()
export class ConfigurationProvider {
  readonly user: SetUserProvider = new SetUserProvider(this._user)
  readonly location: SetLocationProvider = new SetLocationProvider(
    this._location
  )
  readonly breed: SetBreedProvider = new SetBreedProvider(this._breed)

  constructor(
    private readonly _user: UserRepository,
    private readonly _location: LocationRepository,
    private readonly _breed: BreedRepository
  ) {}
}
