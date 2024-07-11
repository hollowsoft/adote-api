import { Injectable } from '@nestjs/common'

import { SetUserProvider } from './set.user.provider'
import { SetLocationProvider } from './set.location.provider'

import { UserRepository } from '@/module/user/user.repository'
import { LocationRepository } from '@/module/location/location.respository'

@Injectable()
export class ConfigurationProvider {
  readonly user: SetUserProvider = new SetUserProvider(this._user)
  readonly location: SetLocationProvider = new SetLocationProvider(this._location)

  constructor(
    private readonly _user: UserRepository,
    private readonly _location: LocationRepository
  ) {}
}
